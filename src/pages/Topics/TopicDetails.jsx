import React, { Component } from "react";
import { Card, CardBody, CardHeader, Table } from "reactstrap";
import { connect } from "react-redux";

import DocumentTitle from "../../components/DocumentTitle";

class TopicDetails extends Component {
  render() {
    const { topicsByName, match: { params: { name } } } = this.props;
    const topic = topicsByName[name];
    return (
      <DocumentTitle title={topic.name}>
        <Card>
          <CardHeader>{topic.name}</CardHeader>
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

export default connect(mapStateToProps)(TopicDetails);
