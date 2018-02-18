import React, { Fragment } from "react";

import ReactDocumentTitle from "react-document-title";

const DocumentTitle = props => {
  return (
    <Fragment>
      <ReactDocumentTitle title={`${props.title} - Kafka Admin`}>
        {props.children}
      </ReactDocumentTitle>
    </Fragment>
  );
};

export default DocumentTitle;
