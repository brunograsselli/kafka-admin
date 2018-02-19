import React, { Component } from "react";
import { Card, CardBody, CardHeader, Table } from "reactstrap";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import KafkaRest from "../../services/KafkaRest";

import DocumentTitle from "../../components/DocumentTitle";

import * as actions from "../../actions/topics";

class Topics extends Component {
  componentDidMount() {
    KafkaRest.topics().then(json => {
      this.props.receiveTopics(json);
    });
  }

  handleOnClick = name => {
    KafkaRest.topic(name).then(json => {
      this.props.receiveTopicDetails(name, json);
      this.props.history.push(`/topics/${name}`);
    });
  };

  render() {
    const { topicsByName } = this.props;

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
                {Object.keys(topicsByName).map(name => (
                  <tr key={name} onClick={() => this.handleOnClick(name)}>
                    <td>{name}</td>
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

const mapStateToProps = state => {
  return {
    topicsByName: state.topics.byName
  };
};

export default connect(mapStateToProps, {
  receiveTopics: actions.receiveTopics,
  receiveTopicDetails: actions.receiveTopicDetails
})(withRouter(Topics));
