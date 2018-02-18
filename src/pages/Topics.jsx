import React, { Component } from "react";
import { Table } from "reactstrap";

class Topics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topics: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:8082/topics")
      .then(response => response.json())
      .then(data => {
        const topics = data.map(e => ({ name: e }));
        console.log(topics);
        this.setState({ topics });
      });
  }

  render() {
    return (
      <div>
        <h1>Topics</h1>
        <Table striped>
          <thead>
            <tr>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {this.state.topics.map(topic => (
              <tr>
                <td>{topic.name}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default Topics;
