import {
  Connection,
  Keypair,
  sendAndConfirmRawTransaction,
  sendAndConfirmTransaction,
  Transaction,
  TransactionMessage
} from "@solana/web3.js"
import nacl from "tweetnacl"

// https://docs.solana.com/developing/clients/javascript-reference

import { Storage } from "@plasmohq/storage"

import { rpcUrl } from "~config"

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
    let connection = new Connection(rpcUrl, "confirmed")
    // const client = new SuiClient({ url: getFullnodeUrl("testnet") })
    const v1MessageBuffer = message.transactionBytes as Uint8Array
    console.log("transactionBytes -> ", v1MessageBuffer)
    // const txb = TransactionBlock.from(transactionBytes)
    const privateKeyStr = await storage.get("secret")
    const privateKeyBytes = Buffer.from(privateKeyStr, "hex")

    const signer = Keypair.fromSecretKey(privateKeyBytes)

    // const messageV0 = TransactionMessage.decompile(v1MessageBuffer)
    // // const transaction = Transaction.from(Buffer.from(transactionBuffer))
    // console.log("reload transaction: ", transaction)
    // transaction.addSignature(signer.publicKey, Buffer.from(signature))
    // console.log("signed transaction: ", transaction)

    // // TODO: sign transaction and send it to solana
    // // https://docs.solana.com/developing/clients/javascript-reference
    // const tx = await connection.sendRawTransaction(
    //   transaction.serialize({
    //     verifySignatures: true,
    //     requireAllSignatures: true
    //   }),
    //   {
    //     skipPreflight: true
    //   }
    // )
    // console.log(tx)

    // const tx = await sendAndConfirmTransaction(connection, transaction, [
    //   signer
    // ])
    // console.log("transaction detail : ", tx)

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
