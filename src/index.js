import React from "react";
import ReactDom from "react-dom";
import { Provider } from "./context/context";
import App from "./App";
import { SpeechProvider } from "@speechly/react-client";
import "./index.css";

ReactDom.render(
  <SpeechProvider appId='abd7a27a-08b2-4997-9689-d29e6096f72e' language='en-US'>
    <Provider>
      <App />
    </Provider>
  </SpeechProvider>,
  document.getElementById("root")
);
