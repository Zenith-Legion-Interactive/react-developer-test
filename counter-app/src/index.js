import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./utils/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        {/* <div style={{padding: "20px"}}>
          <div>
            <Counter counterId="counter3" />
          </div>
          <div> */}
        <App />
        {/* </div>
        </div> */}
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
