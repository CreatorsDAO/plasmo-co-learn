import {
  ConnectButton,
  createNetworkConfig,
  SuiClientProvider,
  useCurrentAccount,
  useSignAndExecuteTransactionBlock,
  WalletProvider
} from "@mysten/dapp-kit"
import { getFullnodeUrl } from "@mysten/sui.js/client"
import { TransactionBlock } from "@mysten/sui.js/dist/cjs/builder"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import styleText from "data-text:./style.css"
import dappStyle from "data-text:@mysten/dapp-kit/dist/index.css"
import type { PlasmoCSConfig } from "plasmo"
import { useEffect, useRef, useState } from "react"

import type { Script } from "~hooks/script"
import { ScriptDatabase } from "~hooks/useScript"

// Config options for the networks you want to connect to
const { networkConfig } = createNetworkConfig({
  localnet: { url: getFullnodeUrl("localnet") },
  mainnet: { url: getFullnodeUrl("mainnet") }
})

export const config: PlasmoCSConfig = {
  matches: ["https://*/*"],
  world: "MAIN",
  run_at: "document_end"
}

export const getRootContainer = () =>
  new Promise((resolve) => {
    const checkInterval = setInterval(() => {
      const querySelector = () => {
        const host = window.location.host
        const selectors = {
          "suiexplorer.com": "main",
          "tailwindcss.com": "div",
          "omnilending.omnibtc.finance": "div"
        }
        return selectors[host] || "main"
      }

      const rootContainerParent = document.querySelector(querySelector())
      if (rootContainerParent) {
        clearInterval(checkInterval)
        const rootContainer = document.createElement("div")
        const style = document.createElement("style")
        style.textContent = styleText + "\n\n" + dappStyle

        rootContainerParent.appendChild(style)
        rootContainerParent.appendChild(rootContainer)
        resolve(rootContainer)
      }
      console.log("waiting for root container ....")
    }, 500)
  })

const MyApp = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const [display, updateDisplay] = useState(false)
  const { mutate: signTransactionBlock } = useSignAndExecuteTransactionBlock()
  const account = useCurrentAccount()
  const [transction, setTransaction] = useState("xxxx")
  const queryClient = new QueryClient()
  const [script, updateScript] = useState("")

  const toggleDisplay = () => {
    updateDisplay(!display)
  }

  const executeScript = async () => {}

  useEffect(() => {
    window.addEventListener("message", (event) => {
      const { type, transactionBytes } = event.data
      if (type === "scriptExecuteResult") {
        const txb = TransactionBlock.from(transactionBytes)
        signTransactionBlock(
          { transactionBlock: txb, chain: account.chains[0] },
          {
            onSuccess: (data) => {
              alert(JSON.stringify(data))
              setTransaction(data.digest)
            },
            onError: (error) => {
              console.log(error)
              alert(error)
            }
          }
        )
      }
    })
  })

  return display ? (
    <div className="plasmo-card plasmo-w-full  plasmo-bg-base-100 plasmo-shadow-xl plasmo-p-3 plasmo-flex">
      <QueryClientProvider client={queryClient}>
        <SuiClientProvider networks={networkConfig}>
          <WalletProvider autoConnect={true}>
            <div>
              <ConnectButton />
              {account && (
                <span className="plasmo-ml-5">Chains: {account.chains}</span>
              )}
            </div>
            <div className="plasmo-mt-2">
              <select
                defaultValue={""}
                className="plasmo-select plasmo-select-bordered plasmo-w-full plasmo-max-w-xs plasmo-mt-2"
                onChange={(e) => {
                  const selectedScript = ScriptDatabase.find(
                    (script) => script.name === e.target.value
                  )
                  if (selectedScript) {
                    updateScript(selectedScript.script)
                  }
                }}>
                <option value={""}>Choose Script Template.</option>
                {ScriptDatabase.map((script: Script) => {
                  return (
                    <option value={script.name} key={script.name}>
                      {script.name}
                    </option>
                  )
                })}
              </select>
              <textarea
                placeholder="Enter your script here!"
                value={script}
                onChange={(e) => updateScript(e.target.value)}
                className="plasmo-mt-4 plasmo-w-full plasmo-h-96 plasmo-p-2 plasmo-text-sm plasmo-text-gray-700 plasmo-border plasmo-border-gray-300 plasmo-rounded-md focus:plasmo-outline-none focus:plasmo-ring-1 focus:plasmo-ring-blue-500 focus:plasmo-border-transparent"
              />
              <button
                className="plasmo-mt-3 plasmo-btn plasmo-btn-info"
                onClick={executeScript}>
                Execute Script
              </button>
              <button
                className="plasmo-mt-3 plasmo-btn plasmo-btn-succ plasmo-ml-3"
                onClick={toggleDisplay}>
                Close Me!
              </button>
              {transction ? (
                <span className="plasmo-ml-3">{transction}</span>
              ) : null}
            </div>
          </WalletProvider>
        </SuiClientProvider>
      </QueryClientProvider>
    </div>
  ) : (
    <button
      className="plasmo-flex plasmo-fixed plasmo-top-32 plasmo-right-8 plasmo-btn plasmo-btn-info"
      onClick={toggleDisplay}>
      SUI Script
    </button>
  )
}

const PlasmoOverlay = () => {
  const queryClient = new QueryClient()

  return (
    <div
      style={{
        zIndex: 5000
      }}
      className="plasmo-fixed plasmo-top-28 plasmo-right-8">
      <QueryClientProvider client={queryClient}>
        <SuiClientProvider networks={networkConfig} defaultNetwork="mainnet">
          <WalletProvider autoConnect={true}>
            <MyApp />
          </WalletProvider>
        </SuiClientProvider>
      </QueryClientProvider>
    </div>
  )
}

export default PlasmoOverlay
