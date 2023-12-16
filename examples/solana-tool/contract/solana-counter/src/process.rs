use {
    crate::models,
    borsh::{to_vec, BorshDeserialize},
    solana_program::{
        account_info::{next_account_info, AccountInfo},
        entrypoint::ProgramResult,
        msg,
        program::invoke_signed,
        pubkey::Pubkey,
        system_instruction,
        sysvar::{rent::Rent, Sysvar},
    },
};

pub fn counter_increment(
    accounts: &[AccountInfo],
    name: &str,
    amount: u64,
    program_id: &Pubkey,
) -> ProgramResult {
    let account_info_iter = &mut accounts.iter();
    let payer = next_account_info(account_info_iter)?;
    let counter_account = next_account_info(account_info_iter)?;
    let system_account = next_account_info(account_info_iter)?;

    let (pda, bump_seed) = Pubkey::find_program_address(&[name.as_bytes()], program_id);

    msg!(
        "from client account info: system_account: {:?} , pda: {:?},bump_seed : {} ",
        system_account,
        pda,
        bump_seed
    );

    assert!(
        payer.is_signer && payer.is_writable && counter_account.is_writable,
        "users invalid!"
    );

    if pda != *counter_account.key {
        msg!("Queue account does not have the correct pda");
        return Err(solana_program::program_error::ProgramError::InvalidSeeds);
    }

    if counter_account.data_len() != 0 {
        let mut user_counter = models::CounterData::try_from_slice(&counter_account.data.borrow())?;
        user_counter.value += amount;
        let counter_bytes = to_vec(&user_counter)?;

        counter_account
            .data
            .borrow_mut()
            .copy_from_slice(&counter_bytes);
    } else {
        msg!("curent queue_account has data,try to unserialize...");
        let counter_data = models::CounterData { value: amount };
        let counter_bytes = to_vec(&counter_data)?;
        let pda_space: u64 = counter_bytes.len() as u64;

        // 计算所需的租金
        let rent = Rent::get()?;
        let rent_lamports: u64 = rent.minimum_balance(pda_space as usize);
        msg!("rent_lamports: {}", rent_lamports);
        //  创建账户
        invoke_signed(
            &system_instruction::create_account(
                payer.key,
                counter_account.key,
                rent_lamports,
                pda_space,
                program_id,
            ),
            &[
                payer.clone(),
                counter_account.clone(),
                system_account.clone(),
            ],
            &[&[name.as_bytes(), &[bump_seed]]],
        )?;
        counter_account
            .data
            .borrow_mut()
            .copy_from_slice(&counter_bytes);
    }
    Ok(())
}
