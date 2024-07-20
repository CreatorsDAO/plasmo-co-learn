import "./styles/tailwind.css"

import { sendToBackground } from "@plasmohq/messaging"

const handle = async () => {
  await sendToBackground({
    name: "galxe",
    body: {
      action: "start"
    }
  })
}

export default function IndexPopup() {
  return (
    <div
      className="h-40 w-72 relative flex items-center justify-center"
      style={{
        backgroundImage:
          "radial-gradient(circle at bottom center, hsl(0 0% 12.9%), hsl(0 0% 2%)"
      }}>
      <button
        onClick={handle}
        className="rounded-2xl border-2 border-dashed border-black bg-white px-3 py-1 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
        start
      </button>
      <div className="absolute bottom-4 flex items-center text-white">
        <span>Built by&nbsp;</span>
        <a
          href="https://twitter.com/shadcn"
          target="_blank"
          rel="noreferrer"
          className="font-medium underline underline-offset-4">
          shadcn
        </a>
      </div>
    </div>
  )
}
