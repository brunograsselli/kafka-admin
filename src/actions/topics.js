export const RECEIVE_TOPICS = "RECEIVE_TOPICS";
export function receiveTopics(json) {
  return {
    type: RECEIVE_TOPICS,
    byName: json.reduce((acc, name) => {
      acc[name] = {
        name,
        isSystemTopic: name.startsWith("_") || name.startsWith("connect-")
      };
      return acc;
    }, {})
  };
}

export const RECEIVE_TOPIC_DETAILS = "RECEIVE_TOPIC_DETAILS";
export function receiveTopicDetails(name, json) {
  return {
    type: RECEIVE_TOPIC_DETAILS,
    name,
    details: json
  };
}
