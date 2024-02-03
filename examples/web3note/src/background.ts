export {};

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  const { type, content } = message;
  if (type === "load") {
    console.log("load from -> ", content);
    const { url } = content;
    const loadUrl = async (url: string) => {
      const response = await fetch(url);
      const text = await response.text();
      const payload = { status: response.status, text };
      console.log("load response -> ", payload);
      sendResponse(payload);
    };
    loadUrl(url);
  }
  return true;
});
