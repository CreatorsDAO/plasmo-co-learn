interface Handler {
  handleMessage(event: any): void
}

interface Window {
  ____handler: Handler
  sendPopMessage: () => void
  receiveEvent: (event: any) => void
  // web developer can set handler to handle message from pop world
  setExtensionHandler(h: Handler): void
}

window.setExtensionHandler({
  handleMessage(event) {
    console.log("user handle : ", event)
  }
})
