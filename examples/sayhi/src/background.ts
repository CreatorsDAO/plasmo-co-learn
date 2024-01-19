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
      }
    })
  }
})
