import React, { Component } from "react";
import { Card, CardBody, CardHeader, Table } from "reactstrap";

import KafkaRest from "../services/KafkaRest";

import DocumentTitle from "../components/DocumentTitle";

class Topics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topics: []
    };
  }

  componentDidMount() {
    KafkaRest.topics().then(data => {
      const topics = data.map(e => ({ name: e }));
      this.setState({ topics });
    });
  }

  handleOnClick = topic => {
    KafkaRest.topic(topic).then(data => console.log(data));
  };

  render() {
    return (
      <DocumentTitle title="Topics">
        <Card>
          <CardBody>
            <Table hover>
              <thead>
                <tr>
                  <th>Name</th>
                </tr>
              </thead>
              <tbody>
                {this.state.topics.map(topic => (
                  <tr
                    key={topic.name}
                    onClick={() => this.handleOnClick(topic.name)}
                  >
                    <td>{topic.name}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </CardBody>
        </Card>
      </DocumentTitle>
    );
  }
}

export default Topics;
