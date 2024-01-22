import { useState } from "react"

import "~style.css"

function IndexPopup() {
  const [msg, updateMsg] = useState("click me!")
  const [cmd, updateCmd] = useState("")
  const port = chrome.runtime.connect({ name: "port.hi" })

  port.onMessage.addListener((msg) => {
    console.log("msg", msg)
    updateMsg(JSON.stringify(msg))
  })

  const clickMe = async () => {
    updateMsg("loading...")

    chrome.runtime.sendMessage({ type: "hi" }, (response) => {
      updateMsg(response.message)
    })
  }

  const sendPort = async () => {
    const params = cmd.split(" ")
    const myType = params.shift()

    port.postMessage({ type: myType, msg: params.join(" ") })
  }

  return (
    <div
      style={{
        width: 500,
        height: 300,
        textAlign: "center",
        padding: "1rem"
      }}
      className="plasmo-flex plasmo-flex-wrap plasmo-items-center plasmo-justify-center">
      <div className="plasmo-w-full">
        <button onClick={clickMe} className="plasmo-btn plasmo-btn-success">
          Message Call
        </button>
      </div>

      <div>
        <input
          type="text"
          placeholder="Type here"
          className="plasmo-input plasmo-input-bordered plasmo-input-primary plasmo-max-w-xs"
          value={cmd}
          onChange={(e) => updateCmd(e.target.value)}
        />
        <button
          onClick={sendPort}
          className="plasmo-btn plasmo-btn-primary plasmo-ml-2">
          Port Send
        </button>
      </div>

      <hr className="plasmo-w-full" />
      <div className="plasmo-alert plasmo-alert-warning">
        <span>{msg}</span>
      </div>
    </div>
  )
}

export default IndexPopup
