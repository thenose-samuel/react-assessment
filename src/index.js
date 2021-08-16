import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "react-slick";
import "react-calendar/dist/Calendar.css";
import reportWebVitals from "./reportWebVitals";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// npm i react-router-dom slick-carousel redux-thunk redux-persist redux-logger redux-devtools-extension redux react-slick react-redux react-icons react-helmet @headlessui/react @heroicons/react @tailwindcss/aspect-ratio @tailwindcss/forms
