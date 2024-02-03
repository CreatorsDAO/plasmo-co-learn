console.log("Web3Note extension loaded");

document.addEventListener("Web3NoteLoadEvent", async (event: any) => {
  console.log("receive event ", event);
  const { url } = event.detail;
  chrome.runtime
    .sendMessage({
      type: "load",
      content: {
        url: url as string,
      },
    })
    .then((payload) => {
      console.log("runtime payload return  -> ", payload);
      document.dispatchEvent(
        new CustomEvent("Web3NoteLoadedEvent", { detail: payload })
      );
    })
    .catch((error) => {
      console.log(error);
    });
});
