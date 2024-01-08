import type { Script } from "./script"

export const ScriptDatabase: Script[] = [
  {
    name: "Donate Sui To Author",
    script: `
  const [coin] = txb.splitCoins(txb.gas, [1000]);
  txb.transferObjects([coin], '0xc4d17bdea567268b50cb24c783ccafc678d468a0cfce0afb84313b163cb403ef');
      `
  },
  {
    name: "Create FastNFT",
    script: `
txb.moveCall(
  {
    target: '0x407e664798ffcb29ddf410f0fc5e62aa38da191a9203399118f59dbceb9a3494::fast_nft::mint_to_sender',
    arguments:[
      txb.pure('nft name'),
      txb.pure('nft description'),
      txb.pure('https://avatars.githubusercontent.com/u/129404293?s=200&v=4')
    ]
  }
);
    `
  },
  {
    name: "Split 1 $Move",
    script: `
for(let idx = 0; idx < 10; idx++) {
  txb.moveCall({
    target: '0x830fe26674dc638af7c3d84030e2575f44a2bdc1baa1f4757cfe010a4b106b6a::movescription::split',
      arguments:[
        txb.object('0x08941aa231c3cde8c0639744c55c0d4c8c4c4b0edaed814ea4397239c9af9eab'),
        txb.pure(1)
      ]
  });
}
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
