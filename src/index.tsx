import React from "react";
import ReactDOM from "react-dom/client";
import {App} from "./components/common/App";
import ApolloClient from "apollo-boost";
import {ApolloProvider} from "@apollo/react-hooks";
import {URL} from "./utils/constants";
import "./index.scss";
import "antd/dist/antd.css";

const client: any = new ApolloClient({
  uri: URL,
});

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApolloProvider>
);
