import {
  Connection,
  PublicKey,
  SystemProgram,
  Transaction,
  TransactionInstruction
} from "@solana/web3.js"
import { useEffect, useState } from "react"

import { useStorage } from "@plasmohq/storage/hook"

import { rpcUrl } from "../config"

import "~style.css"

function IndexPopup() {
  const counterName = "creators"
  const programID = "ASWqcq5N7Zx97FjZGg1jFKJNjdXPqZNzq9n3rnUjsBdD"
  let connection = new Connection(rpcUrl, "confirmed")

  const [addressStr] = useStorage("addressStr")
  const [balance, setBalance] = useState(0)
  const [counter, setCounter] = useState(0)
  const [counterVersion, updateCounterVersion] = useState(0)
  const [sx, setSx] = useState<any>(null)

  const [counterAccount, bump_seed] = PublicKey.findProgramAddressSync(
    [Buffer.from(counterName)],
    new PublicKey(programID)
  )

  const addCounter = async () => {
    let blockhash = (await connection.getLatestBlockhash("finalized")).blockhash
    console.log("blockhash : -> ", blockhash)

    const tx = new Transaction()
    tx.feePayer = new PublicKey(addressStr)
    tx.recentBlockhash = blockhash
    const ix = SystemProgram.transfer({
      fromPubkey: new PublicKey(addressStr),
      toPubkey: new PublicKey(addressStr),
      lamports: 1000000000
    })
    tx.add(ix)

    tx.add(
      new TransactionInstruction({
        keys: [
          {
            pubkey: new PublicKey(addressStr),
            isSigner: true,
            isWritable: true
          },
          {
            pubkey: counterAccount,
            isSigner: false,
            isWritable: true
          },
          {
            pubkey: SystemProgram.programId,
            isSigner: false,
            isWritable: false
          }
        ],
        data: Buffer.from(Uint8Array.of(1)),
        programId: new PublicKey(programID)
      })
    )

    const sx = await chrome.runtime.sendMessage({
      action: "executeTransaction",
      transactionBytes: tx.serializeMessage()
    })
    console.log(sx)
    setSx(sx)
    updateCounterVersion(counterVersion + 1)
  }

  const airDrop = async () => {
    const airdropSignature = await connection.requestAirdrop(
      new PublicKey(addressStr),
      10000000000
    )
    const latestBlockHash = await connection.getLatestBlockhash()
    await connection.confirmTransaction(
      {
        blockhash: latestBlockHash.blockhash,
        lastValidBlockHeight: latestBlockHash.lastValidBlockHeight,
        signature: airdropSignature
      },
      "finalized"
    )
    updateCounterVersion(counterVersion + 1)
  }

  useEffect(() => {
    if (addressStr) {
      const initWallet = async () => {
        console.log("init wallet ", addressStr)
        const balance = await connection.getBalance(new PublicKey(addressStr))
        setBalance(balance)
      }
      initWallet()
    }
  }, [addressStr, counterVersion])

  useEffect(() => {
    const updateCounter = async () => {
      const account = await connection.getAccountInfo(counterAccount)
      console.log(account)
    }
    updateCounter()
  }, [counterVersion])

  return (
    <div
      style={{
        width: "500px",
        height: "500px"
      }}
      className="plasmo-p-5 plasmo-flex-auto">
      <p className="plasmo-m-2 plasmo-font-bold">Solana example tool</p>
      <p className="plasmo-m-2">CounterVersion : {counterVersion}</p>
      <div className="plasmo-m-2">Address : {addressStr}</div>
      <div className="plasmo-m-2">Balance : {balance}</div>
      <div className="plasmo-flex plasmo-m-2">
        <button
          className="plasmo-m-2 plasmo-flex plasmo-flex-row plasmo-items-center plasmo-px-4 plasmo-py-2 plasmo-text-sm plasmo-rounded-lg plasmo-transition-all plasmo-border-none
        plasmo-shadow-lg hover:plasmo-shadow-md
        active:plasmo-scale-105 plasmo-bg-indigo-500 hover:plasmo-bg-indigo-300 plasmo-text-slate-800 hover:plasmo-text-slate-900"
          onClick={airDrop}>
          Air Drop
        </button>
      </div>
      <div className="plasmo-mt-2">
        <p className="plasmo-m-2">Program : {programID}</p>
        <p className="plasmo-m-2">Counter(Pda) : {counterAccount.toBase58()}</p>
        <p className="plasmo-m-2">Value : {counter}</p>
        <button
          className="plasmo-m-2 plasmo-flex plasmo-flex-row plasmo-items-center plasmo-px-4 plasmo-py-2 plasmo-text-sm plasmo-rounded-lg plasmo-transition-all plasmo-border-none
        plasmo-shadow-lg hover:plasmo-shadow-md
        active:plasmo-scale-105 plasmo-bg-slate-50 hover:plasmo-bg-slate-100 plasmo-text-slate-800 hover:plasmo-text-slate-900"
          onClick={addCounter}>
          Add Counter
        </button>

        <div className="plasmo-mt-5">
          {sx && (
            <a
              target="_blank"
              href={`https://explorer.solana.com/tx/${sx}?cluster=custom`}>
              {sx}
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default IndexPopup
