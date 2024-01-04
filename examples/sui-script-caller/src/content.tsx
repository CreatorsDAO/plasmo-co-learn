import {
  ConnectButton,
  createNetworkConfig,
  SuiClientProvider,
  useSignAndExecuteTransactionBlock,
  WalletProvider
} from "@mysten/dapp-kit"
import { getFullnodeUrl } from "@mysten/sui.js/client"
import { TransactionBlock } from "@mysten/sui.js/dist/cjs/builder"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import styleText from "data-text:./style.css"
import type { PlasmoCSConfig } from "plasmo"
import { useState } from "react"

// Config options for the networks you want to connect to
const { networkConfig } = createNetworkConfig({
  localnet: { url: getFullnodeUrl("localnet") },
  mainnet: { url: getFullnodeUrl("mainnet") }
})

export const config: PlasmoCSConfig = {
  matches: ["https://suiexplorer.com/*", "https://tailwindcss.com/*"],
  world: "MAIN",
  run_at: "document_end"
}

export const getRootContainer = () =>
  new Promise((resolve) => {
    const checkInterval = setInterval(() => {
      const rootContainerParent = document.querySelector("header")
      if (rootContainerParent) {
        clearInterval(checkInterval)
        const rootContainer = document.createElement("div")
        const style = document.createElement("style")
        style.textContent = styleText
        rootContainerParent.appendChild(style)
        rootContainerParent.appendChild(rootContainer)
        resolve(rootContainer)
      }
      console.log("waiting for root container ....")
    }, 500)
  })

const MyApp = () => {
  const [display, updateDisplay] = useState(false)
  const { mutate: signTransactionBlock } = useSignAndExecuteTransactionBlock()

  const queryClient = new QueryClient()
  const [script, updateScript] = useState(`
  
const [coin] = txb.splitCoins(txb.gas, [100]);
txb.transferObjects([coin], '0xc4d17bdea567268b50cb24c783ccafc678d468a0cfce0afb84313b163cb403ef');

  
  `)

  const toggleDisplay = () => {
    updateDisplay(!display)
  }

  const executeBlock = async () => {
    const txb = new TransactionBlock()
    eval(script)
    signTransactionBlock(
      { transactionBlock: txb },
      {
        onSuccess: (data) => {
          alert(data)
        },
        onError: (error) => {
          alert(error)
        }
      }
    )
  }

  return display ? (
    <div className="plasmo-card plasmo-w-1/2  plasmo-bg-base-100 plasmo-shadow-xl plasmo-p-3 plasmo-mt-36 plasmo-z-50 plasmo-flex plasmo-fixed plasmo-top-32 plasmo-right-8">
      <QueryClientProvider client={queryClient}>
        <SuiClientProvider networks={networkConfig} defaultNetwork="localnet">
          <WalletProvider autoConnect={true}>
            <div>
              <ConnectButton />
            </div>
            <div className="plasmo-mt-2">
              <select className="plasmo-select plasmo-select-bordered plasmo-w-full plasmo-max-w-xs plasmo-mt-2">
                <option disabled selected>
                  Choose Script Template.
                </option>
                <option>Script A</option>
                <option>Script B</option>
              </select>

              <textarea
                placeholder="Enter your script here!"
                value={script}
                onChange={(e) => updateScript(e.target.value)}
                className="plasmo-mt-4 plasmo-w-full plasmo-h-64 plasmo-p-2 plasmo-text-sm plasmo-text-gray-700 plasmo-border plasmo-border-gray-300 plasmo-rounded-md focus:plasmo-outline-none focus:plasmo-ring-1 focus:plasmo-ring-blue-500 focus:plasmo-border-transparent"
              />
              <button
                className="plasmo-mt-3 plasmo-btn plasmo-btn-info"
                onClick={executeBlock}>
                Call Sui Script
              </button>
              <button
                className="plasmo-mt-3 plasmo-btn plasmo-btn-succ plasmo-ml-3"
                onClick={toggleDisplay}>
                Close Me!
              </button>
            </div>
          </WalletProvider>
        </SuiClientProvider>
      </QueryClientProvider>
    </div>
  ) : (
    <button
      className="plasmo-z-50 plasmo-flex plasmo-fixed plasmo-top-32 plasmo-right-8 plasmo-btn plasmo-btn-info"
      onClick={toggleDisplay}>
      SUI Script
    </button>
  )
}

const PlasmoOverlay = () => {
  const queryClient = new QueryClient()

  return (
    <div className="plasmo-fixed plasmo-top-32 plasmo-right-8">
      <QueryClientProvider client={queryClient}>
        <SuiClientProvider networks={networkConfig} defaultNetwork="localnet">
          <WalletProvider autoConnect={true}>
            <MyApp />
          </WalletProvider>
        </SuiClientProvider>
      </QueryClientProvider>
    </div>
  )
}

export default PlasmoOverlay
