const KafkaRest = {
  topics: () => {
    return fetch("http://localhost:8082/topics").then(response =>
      response.json()
    );
  },
  topic: name => {
    return fetch(`http://localhost:8082/topics/${name}`).then(response =>
      response.json()
    );
  }
};
export default KafkaRest;
