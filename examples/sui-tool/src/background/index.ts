import { getFullnodeUrl, SuiClient } from "@mysten/sui.js/client"
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519"
import { TransactionBlock } from "@mysten/sui.js/transactions"
import { fromB64 } from "@mysten/sui.js/utils"

import { Storage } from "@plasmohq/storage"

export {}

const storage = new Storage()

chrome.runtime.onInstalled.addListener(async () => {
  const keypair = Ed25519Keypair.generate()
  await storage.set("secret", keypair.export().privateKey)
  await storage.set("address", keypair.getPublicKey().toSuiAddress().toString())
  console.log("Extension installed.")
})

chrome.runtime.onMessage.addListener(async (message, sender, sendResponse) => {
  if (message.action === "executeTransaction") {
    const client = new SuiClient({ url: getFullnodeUrl("testnet") })
    const transactionBytes = message.transactionBytes
    const txb = TransactionBlock.from(transactionBytes)
    const privateKey = await storage.get("secret")
    const privateKeyBytes = fromB64(privateKey)
    // console.log(privateKeyBytes)
    // sendResponse({ privateKeyBytes })
    const signer = Ed25519Keypair.fromSecretKey(privateKeyBytes)
    console.log("caller address -> ", signer.toSuiAddress().toString())
    const tx = await client.signAndExecuteTransactionBlock({
      signer: signer,
      transactionBlock: txb
    })

    console.log("transaction : ", tx)

    sendResponse(tx)
  }
})
