import { Keypair, VersionedTransaction } from "@solana/web3.js"
import nacl from "tweetnacl"

// https://docs.solana.com/developing/clients/javascript-reference

import { Storage } from "@plasmohq/storage"

export {}

const storage = new Storage()

chrome.runtime.onInstalled.addListener(async () => {
  const keypair = Keypair.generate()
  let buf = Buffer.from(keypair.secretKey)
  await storage.set("secret", buf.toString("hex"))

  await storage.set("addressStr", keypair.publicKey.toBase58())
  console.log("Extension installed.")
})

chrome.runtime.onMessage.addListener(async (message, sender, sendResponse) => {
  if (message.action === "executeTransaction") {
    // const client = new SuiClient({ url: getFullnodeUrl("testnet") })
    const transactionBuffer = message.transactionBytes as Buffer
    console.log("transactionBytes -> ", transactionBuffer)
    // const txb = TransactionBlock.from(transactionBytes)
    const privateKeyStr = await storage.get("secret")
    const privateKeyBytes = Buffer.from(privateKeyStr, "hex")

    const signer = Keypair.fromSecretKey(privateKeyBytes)
    const signature = nacl.sign.detached(
      Buffer.from(transactionBuffer),
      signer.secretKey
    )
    console.log("signature->", signature)

    const transaction = VersionedTransaction.deserialize(
      Buffer.from(transactionBuffer)
    )
    console.log(transaction)
    // transaction.addSignature(signer.publicKey, Buffer.from("jellyfish"))

    // console.log("transaction->", transaction)

    // // sendResponse({ privateKeyBytes })
    // const signer = Ed25519Keypair.fromSecretKey(privateKeyBytes)
    // console.log("caller address -> ", signer.toSuiAddress().toString())
    // const tx = await client.signAndExecuteTransactionBlock({
    //   signer: signer,
    //   transactionBlock: txb
    // })
    // console.log("transaction : ", tx)
    // sendResponse(tx)
  }
})
