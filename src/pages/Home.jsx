import React, { Component } from "react";

import DocumentTitle from "../components/DocumentTitle";

class Home extends Component {
  render() {
    return (
      <DocumentTitle title="Home">
        <div>Welcome to Kafka Admin!</div>
      </DocumentTitle>
    );
  }
}

export default Home;
