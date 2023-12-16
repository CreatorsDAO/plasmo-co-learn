use borsh::{BorshDeserialize, BorshSerialize};

#[derive(BorshSerialize, BorshDeserialize, Debug)]
pub enum InstructionData {
    Increment { name: String, amount: u64 },
}

#[derive(BorshSerialize, BorshDeserialize, Debug)]
pub struct CounterData {
    pub value: u64,
}
