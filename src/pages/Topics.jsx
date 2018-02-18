import React, { Component } from "react";
import { Card, CardBody, CardHeader, Table } from "reactstrap";

import KafkaRest from "../services/KafkaRest";

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

  render() {
    return (
      <Card>
        <CardHeader>Topics</CardHeader>
        <CardBody>
          <Table striped>
            <thead>
              <tr>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>
              {this.state.topics.map(topic => (
                <tr key={topic.name}>
                  <td>{topic.name}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    );
  }
}

export default Topics;
