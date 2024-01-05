import type { Script } from "./script"

export const ScriptDatabase: Script[] = [
  {
    name: "Split Coin",
    script: `
  const [coin] = txb.splitCoins(txb.gas, [100]);
  txb.transferObjects([coin], '0xc4d17bdea567268b50cb24c783ccafc678d468a0cfce0afb84313b163cb403ef');
      `
  },
  {
    name: "Send Sui",
    script: `
txb.
`
  },
  {
    name: "Move Call",
    script: `
`
  }
]

export const loadScript = async () => {
  const loadScript = (src: string) => {
    return new Promise((resolve, reject) => {
      resolve(ScriptDatabase)
    })
  }

  return {
    loadScript
  }
}
