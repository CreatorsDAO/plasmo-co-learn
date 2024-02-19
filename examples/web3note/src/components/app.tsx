import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

import NotePanel from "./note-panel";

const App = () => {
  const [display, updateDisplay] = useState(false);
  const queryClient = new QueryClient();

  const toggleDisplay = () => {
    updateDisplay(!display);
  };

  return display ? (
    <QueryClientProvider client={queryClient}>
      <div className="plasmo-card plasmo-bg-base-200 plasmo-shadow-xl plasmo-w-1/2 plasmo-fixed plasmo-top-5 plasmo-right-0">
        <div className="plasmo-card-body">
          <div className="plasmo-card-actions plasmo-justify-end">
            <button
              className="plasmo-btn plasmo-btn-square plasmo-btn-sm"
              onClick={toggleDisplay}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="plasmo-h-6 plasmo-w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <NotePanel />
        </div>
      </div>
    </QueryClientProvider>
  ) : (
    <div className="plasmo-float-end plasmo-fixed plasmo-top-28 plasmo-right-0">
      <button
        onClick={toggleDisplay}
        className="plasmo-btn plasmo-btn-success plasmo-mt-2"
      >
        Web3Note
      </button>
    </div>
  );
};

export default App;
