// import { getFullnodeUrl, SuiClient } from "@mysten/sui.js/client"
// import { getFaucetHost, requestSuiFromFaucetV0 } from "@mysten/sui.js/faucet"
// import { TransactionBlock } from "@mysten/sui.js/transactions"
// import { MIST_PER_SUI } from "@mysten/sui.js/utils"

import {
  Connection,
  PublicKey,
  SystemProgram,
  Transaction,
  TransactionInstruction
} from "@solana/web3.js"
import { useEffect, useState } from "react"

import { useStorage } from "@plasmohq/storage/hook"

import { rpcUrl } from "./config"

import "~style.css"

function IndexPopup() {
  const counterName = "creators"
  const programID = "ASWqcq5N7Zx97FjZGg1jFKJNjdXPqZNzq9n3rnUjsBdD"
  // const counterID =
  //   "0xca9b2043af3accad328bbae361a4941a778ebc6d2f02ffe09b001c06ed643934"

  // let connection = new Connection(clusterApiUrl("testnet"))
  let connection = new Connection(rpcUrl, "confirmed")

  const [addressStr] = useStorage("addressStr")
  const [balance, setBalance] = useState(0)
  const [counter, setCounter] = useState(0)
  const [counterVersion, updateCounterVersion] = useState(0)

  const [counterAccount, bump_seed] = PublicKey.findProgramAddressSync(
    [Buffer.from(counterName)],
    new PublicKey(programID)
  )

  const addCounter = async () => {
    let blockhash = (await connection.getLatestBlockhash("finalized")).blockhash
    console.log("blockhash : -> ", blockhash)

    let transaction = new Transaction()
    transaction.recentBlockhash = blockhash
    transaction.feePayer = new PublicKey(addressStr)

    transaction.add(
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
        programId: new PublicKey(programID),
        data: Buffer.from([1])
      })
    )

    console.log("transaction : -> ", transaction)
    console.log(
      "serialized transaction : -> ",
      transaction.serialize({
        verifySignatures: false,
        requireAllSignatures: false
      })
    )
    const tx = await chrome.runtime.sendMessage({
      action: "executeTransaction",
      transactionBytes: transaction.serialize({
        verifySignatures: false,
        requireAllSignatures: false
      })
    })
    // console.log(tx)
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
      // const counter = await suiClient.getObject({
      //   id: counterID,
      //   options: {
      //     showContent: true
      //   }
      // })
      // if (counter.data && counter.data.content) {
      //   const content = counter.data.content as any
      //   if (counter && content.fields && content.fields.value) {
      //     setCounter(content.fields.value)
      //   }
      // }
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
      </div>
    </div>
  )
}

export default IndexPopup
