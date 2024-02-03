import cssText from "data-text:~style.css";
import type { PlasmoCSConfig } from "plasmo";

import App from "~components/app";

export const config: PlasmoCSConfig = {
  matches: ["<all_urls>"],
  world: "MAIN",
  run_at: "document_start",
};

export const getStyle = () => {
  const style = document.createElement("style");
  style.textContent = cssText;
  return style;
};

const PlasmoOverlay = () => {
  return (
    <div
      data-theme="light"
      style={{
        zIndex: 5000,
      }}
    >
      <App />
    </div>
  );
};

export default PlasmoOverlay;
