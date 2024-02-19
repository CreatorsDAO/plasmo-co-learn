console.log("Web3Note extension loaded");

import type { PlasmoCSConfig } from "plasmo";

export const config: PlasmoCSConfig = {
  matches: ["<all_urls>"],
  run_at: "document_start",
};

document.addEventListener("Web3NoteLoadEvent", async (event: any) => {
  console.log("receive event ", event);
  const { url, done } = event.detail;
  chrome.runtime
    .sendMessage({
      type: "load",
      content: {
        url: url as string,
      },
    })
    .then((payload) => {
      console.log("runtime payload return  -> ", payload);
      document.dispatchEvent(new CustomEvent(done, { detail: payload }));
    })
    .catch((error) => {
      console.log(error);
    });
});
