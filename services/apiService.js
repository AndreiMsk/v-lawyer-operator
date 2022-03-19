import axios from "libraries/axios";

/* get live chat channels */
const getLiveChatChannels = async () => {
  try {
    const response = await axios.get(`api/chat/get-channels`);
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(error);
  }
};

/* send message on live chat */
const sendMessage = async (data) => {
  try {
    const response = await axios.post("api/chat/add-message", data);
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(error);
  }
};

/* update message status */
const updateMessageStatus = async (channel) => {
  try {
    const response = await axios.post(`api/chat/update-messages/${channel.id}`);
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(error);
  }
};

/* close chat - update to closed status */
const closeChat = async (channel) => {
  try {
    const response = await axios.post(`api/chat/close-chat/${channel.id}`);
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(error);
  }
};

export { getLiveChatChannels, sendMessage, updateMessageStatus, closeChat };

/* working pusher implementation -> switch if necessary due to performance issues*/
// const pusher = new Pusher('356cc28c7b5cd8012ac2', {
//   cluster: 'eu'
// });

// const channel = pusher.subscribe('my-channel');
// channel.bind('my-channel', function(data) {
//   console.log(JSON.stringify(data));
// });
