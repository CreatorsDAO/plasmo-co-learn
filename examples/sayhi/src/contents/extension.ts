import type { PlasmoCSConfig } from "plasmo"

const main = async () => {
  console.log("say hi from content script")
  setInterval(() => {
    port.postMessage({
      type: "echo",
      msg: "hello from content script"
    })
  }, 5000)
}

const port = chrome.runtime.connect({ name: "port.page" })
console.log(port)

const openPage = () => {
  port.postMessage({
    type: "openw",
    msg: "tabs/mypop.html"
  })
}

port.onMessage.addListener((message) => {
  console.log("extension get message: ", message)
  const event = new CustomEvent("myCustomEventMain", {
    detail: {
      message
    }
  })
  document.dispatchEvent(event)
})

window.sendPopMessage = async () => {
  port.postMessage({
    type: "openw",
    msg: "tabs/mypop.html"
  })
}

document.addEventListener("myCustomEvent", (event: any) => {
  const { type, msg } = event.detail
  console.log("document event : ", type, msg)
  port.postMessage({ type, msg })
})

main().then(null).catch(null)

export const config: PlasmoCSConfig = {
  matches: ["<all_urls>"],
  all_frames: true,
  run_at: "document_end"
}
