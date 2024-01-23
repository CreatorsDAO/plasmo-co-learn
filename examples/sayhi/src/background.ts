export {}

chrome.runtime.onMessage.addListener(async (message, sender, sendResponse) => {
  console.log(message)
  if (message.type === "hi") {
    sendResponse({
      message: "you click at " + new Date().toLocaleString()
    })
  }
})

chrome.runtime.onConnect.addListener((port) => {
  if (port.name == "port.hi") {
    port.onMessage.addListener((message) => {
      console.log(message)
      const { type, msg } = message
      switch (type) {
        case "echo":
          port.postMessage(message)
          break
        case "reverse":
          port.postMessage({ type, msg: msg.split("").reverse().join("") })
          break
        case "open":
          chrome.tabs.create({ url: msg })
          break
        case "openw":
          chrome.windows.create({
            url: msg,
            type: "popup",
            width: 300,
            height: 600
          })
          break
        default:
          port.postMessage({ type, msg: "unknown type" })
          break
      }
    })
  }
  if (port.name == "port.page") {
    port.onMessage.addListener(async (message) => {
      console.log(message)
      const { type, msg } = message
      switch (type) {
        case "echo":
          port.postMessage(message)
          break
        case "reverse":
          port.postMessage({ type, msg: msg.split("").reverse().join("") })
          break
        case "open":
          chrome.tabs.create({ url: msg })
          break
        case "openw":
          const win = await chrome.windows.create({
            url: msg,
            type: "popup",
            width: 300,
            height: 600,
            left: 0,
            top: 0
          })

          break
        default:
          port.postMessage({ type, msg: "unknown type" })
          break
      }
    })
  }
})
