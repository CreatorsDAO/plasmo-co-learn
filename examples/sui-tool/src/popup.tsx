import { SuiClient } from "@mysten/sui.js/client"
import { TransactionBlock } from "@mysten/sui.js/transactions"
import { useEffect, useState } from "react"

import { useStorage } from "@plasmohq/storage/hook"

import "~style.css"

function IndexPopup() {
  const counterID =
    "0xca9b2043af3accad328bbae361a4941a778ebc6d2f02ffe09b001c06ed643934"
  const packageId =
    "0x71b72073fbe5789d9e2728a56ac7f42d2b5adbbb583f62b3f006e398c6fe859c"

  const suiClient = new SuiClient({ url: "http://47.76.89.7:9001/" })

  const [address] = useStorage("address")
  const [balance, setBalance] = useState("0")
  const [counter, setCounter] = useState("")
  const [counterVersion, updateCounterVersion] = useState(0)

  const [infoString, setInfoString] = useState("")
  const [tx, setTx] = useState("")

  const addCounter = async () => {
    const txb = new TransactionBlock()
    txb.moveCall({
      target: `${packageId}::checkin::get_flag`,
      arguments: []
      // arguments: [txb.object(counterID), txb.pure(1)]
    })
    console.log(txb.serialize())
    const tx = await chrome.runtime.sendMessage({
      action: "executeTransaction",
      transactionBytes: txb.serialize()
    })
    // alert(JSON.stringify(tx, null, 2))
    setTx(JSON.stringify(tx))
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

        const info = await suiClient.getNormalizedMoveModulesByPackage({
          package: packageId
        })

        console.log(info)
        setInfoString(JSON.stringify(info, null, 2))
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
        width: "750px",
        height: "750px"
      }}
      className="plasmo-p-5 plasmo-flex-auto">
      <div className="plasmo-m-2">Address : {address}</div>
      <div className="plasmo-m-2">Balance : {balance}</div>
      <div className="plasmo-m-2">Counter: {counter}</div>
      <div className="plasmo-m-2">
        <button className="plasmo-btn plasmo-btn-info" onClick={addCounter}>
          Call Me!!!
        </button>
      </div>

      <p>Transaction: {tx}</p>
      <pre>-- {infoString}</pre>
    </div>
  )
}

export default IndexPopup
