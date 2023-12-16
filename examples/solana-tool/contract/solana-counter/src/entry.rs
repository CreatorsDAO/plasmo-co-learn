use borsh::BorshDeserialize;
use solana_program::{
    account_info::AccountInfo, entrypoint, entrypoint::ProgramResult, msg, pubkey::Pubkey,
};

use crate::{models::InstructionData, process};

// declare and export the program's entrypoint
entrypoint!(process_instruction);

// program entrypoint's implementation
pub fn process_instruction(
    program_id: &Pubkey,
    accounts: &[AccountInfo],
    instruction_data: &[u8],
) -> ProgramResult {
    msg!("hello solana world.");
    match InstructionData::try_from_slice(instruction_data) {
        Ok(instruction_data) => {
            msg!("Instruction data: {:?}", instruction_data);
            match instruction_data {
                InstructionData::Increment { name, amount } => {
                    process::counter_increment(accounts, &name, amount, program_id)?;
                    msg!("Incrementing counter");
                }
            }
        }
        Err(err) => {
            msg!("Error: {:?}", err);
        }
    }

    // gracefully exit the program
    Ok(())
}
