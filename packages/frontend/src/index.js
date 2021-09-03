import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "react-apollo";
import UserIp from "./components/UserIp";

import client from "./config/client";

import './index.css'

function Container() {
  return (
    <ApolloProvider client={client}>
      <UserIp />
    </ApolloProvider>
  );
}

ReactDOM.render(<Container />, document.getElementById("app"));
