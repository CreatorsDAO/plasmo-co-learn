import { getFullnodeUrl, SuiClient } from "@mysten/sui.js/client"
import { getFaucetHost, requestSuiFromFaucetV0 } from "@mysten/sui.js/faucet"
import { TransactionBlock } from "@mysten/sui.js/transactions"
import { MIST_PER_SUI } from "@mysten/sui.js/utils"
import { useEffect, useState } from "react"

import { useStorage } from "@plasmohq/storage/hook"

import "~style.css"

function IndexPopup() {
  const counterID =
    "0xca9b2043af3accad328bbae361a4941a778ebc6d2f02ffe09b001c06ed643934"
  const packageId =
    "0x9e38050fd03f181c17f6f1d682ab55c7c16666eed4e17470489e24c64b11b4cd"

  const suiClient = new SuiClient({ url: getFullnodeUrl("testnet") })
  const [address] = useStorage("address")
  const [balance, setBalance] = useState("0")
  const [counter, setCounter] = useState("")
  const [counterVersion, updateCounterVersion] = useState(0)

  const doFaucet = async () => {
    const result = await requestSuiFromFaucetV0({
      host: getFaucetHost("testnet"),
      recipient: address
    })
    console.log(result)
  }

  const addCounter = async () => {
    const txb = new TransactionBlock()
    txb.moveCall({
      target: `${packageId}::counter::add_value`,
      arguments: [txb.object(counterID), txb.pure(1)]
    })
    console.log(txb.serialize())
    const tx = await chrome.runtime.sendMessage({
      action: "executeTransaction",
      transactionBytes: txb.serialize()
    })
    console.log(tx)
    updateCounterVersion(counterVersion + 1)
  }

  useEffect(() => {
    if (address) {
      const initWallet = async () => {
        console.log("init wallet ", address)
        const balance = await suiClient.getBalance({
          owner: address
        })
        setBalance(balance.totalBalance)
      }
      initWallet()
    }
  }, [address])

  useEffect(() => {
    const updateCounter = async () => {
      const counter = await suiClient.getObject({
        id: counterID,
        options: {
          showContent: true
        }
      })
      if (counter.data && counter.data.content) {
        const content = counter.data.content as any
        if (counter && content.fields && content.fields.value) {
          setCounter(content.fields.value)
        }
      }
    }
    updateCounter()
  }, [counterVersion])

  return (
    <div
      style={{
        width: "550px",
        height: "550px"
      }}
      className="plasmo-p-5 plasmo-flex-auto">
      <div className="plasmo-m-2">Address : {address}</div>
      <div className="plasmo-m-2">Balance : {balance}</div>
      <div className="plasmo-m-2">Counter: {counter}</div>
      <div className="plasmo-m-2">
        <button
          className="plasmo-flex plasmo-flex-row plasmo-items-center plasmo-px-4 plasmo-py-2 plasmo-text-sm plasmo-rounded-lg plasmo-transition-all plasmo-border-none
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
