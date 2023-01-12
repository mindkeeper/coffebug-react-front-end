import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider } from "react-router-dom";
import router from "./helpers/router";
import { Provider } from "react-redux";
import store, { persistedStore } from "./redux";
import { PersistGate } from "redux-persist/integration/react";
import { ToastContainer } from "react-toastify";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ToastContainer
      position="top-center"
      autoClose={2000}
      hideProgressBar={false}
      closeOnClick={true}
      pauseOnHover={true}
      draggable={true}
      theme="light"
    />
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistedStore}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
