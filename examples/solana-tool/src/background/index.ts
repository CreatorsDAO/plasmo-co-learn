import { Connection, Keypair, Message, Transaction } from "@solana/web3.js"

// https://docs.solana.com/developing/clients/javascript-reference
// https://www.youtube.com/watch?v=d25ciK5ScXc

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

    const tx = Transaction.populate(
      Message.from(Buffer.from(message.transactionBytes))
    )

    const privateKeyStr = await storage.get("secret")
    const privateKeyBytes = Buffer.from(privateKeyStr, "hex")

    const signer = Keypair.fromSecretKey(privateKeyBytes)
    tx.partialSign(signer)

    console.log(tx.signatures)

    const sx = await connection.sendRawTransaction(tx.serialize())
    console.log(sx)

    sendResponse(sx)
  }
})

chrome.action.onClicked.addListener(async () => {
  chrome.tabs.create({ url: "tabs/default.html" })
})
