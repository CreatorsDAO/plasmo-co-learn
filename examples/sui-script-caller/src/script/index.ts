export interface Script {
  name: string
  script: string
}

export const ScriptDatabase: Script[] = [
  {
    name: "Script A",
    script: `
  const [coin] = txb.splitCoins(txb.gas, [100]);
  txb.transferObjects([coin], '0xc4d17bdea567268b50cb24c783ccafc678d468a0cfce0afb84313b163cb403ef');
      `
  },
  {
    name: "Script B",
    script: ``
  }
]
