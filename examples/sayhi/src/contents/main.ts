import type { PlasmoCSConfig } from "plasmo"

export const config: PlasmoCSConfig = {
  matches: ["<all_urls>"],
  all_frames: true,
  run_at: "document_start",
  world: "MAIN"
}

// inject script to body add sendPopMessage, this can't run chrome.runtime api
window.sendPopMessage = () => {
  const event = new CustomEvent("myCustomEvent", {
    detail: {
      type: "openw",
      msg: "tabs/mypop.html"
    }
  })
  document.dispatchEvent(event)
}

window.setExtensionHandler = (h: Handler) => {
  console.log("set handler", h)
  window.____handler = h
}

document.addEventListener("myCustomEventMain", (event: CustomEvent) => {
  window.receiveEvent(event)
  if (window.____handler != null) {
    window.____handler.handleMessage(event)
  }
})

window.receiveEvent = (event: CustomEvent) => {
  console.log("main world get message ", event.detail)
}
