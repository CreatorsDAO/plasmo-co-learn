// import { getFullnodeUrl, SuiClient } from "@mysten/sui.js/client"
// import { getFaucetHost, requestSuiFromFaucetV0 } from "@mysten/sui.js/faucet"
// import { TransactionBlock } from "@mysten/sui.js/transactions"
// import { MIST_PER_SUI } from "@mysten/sui.js/utils"
import * as web3 from "@solana/web3.js"
import { useEffect, useState } from "react"

import { useStorage } from "@plasmohq/storage/hook"

import { rpcUrl } from "./config"

import "~style.css"

function IndexPopup() {
  const counterName = "creators"
  const programID = "ASWqcq5N7Zx97FjZGg1jFKJNjdXPqZNzq9n3rnUjsBdD"
  // const counterID =
  //   "0xca9b2043af3accad328bbae361a4941a778ebc6d2f02ffe09b001c06ed643934"

  // let connection = new web3.Connection(web3.clusterApiUrl("testnet"))
  let connection = new web3.Connection(rpcUrl, "finalized")

  const [addressStr] = useStorage("addressStr")
  const [balance, setBalance] = useState(0)
  const [counter, setCounter] = useState(0)
  const [counterVersion, updateCounterVersion] = useState(0)

  const [counterAccount, bump_seed] = web3.PublicKey.findProgramAddressSync(
    [Buffer.from(counterName)],
    new web3.PublicKey(programID)
  )

  const addCounter = async () => {
    // const txb = new TransactionBlock()
    // txb.moveCall({
    //   target: `${packageId}::counter::add_value`,
    //   arguments: [txb.object(counterID), txb.pure(1)]
    // })
    // console.log(txb.serialize())
    // const tx = await chrome.runtime.sendMessage({
    //   action: "executeTransaction",
    //   transactionBytes: txb.serialize()
    // })
    // console.log(tx)
    updateCounterVersion(counterVersion + 1)
  }

  const airDrop = async () => {
    const airdropSignature = await connection.requestAirdrop(
      new web3.PublicKey(addressStr),
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
        const balance = await connection.getBalance(
          new web3.PublicKey(addressStr)
        )
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
