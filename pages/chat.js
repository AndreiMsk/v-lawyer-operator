import Layout from "layouts/admin";
import LiveChatContainer from "components/livechat/livechatContainer";

const Chat = () => {
  return <LiveChatContainer />;
};

/* get default layout */
Chat.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Chat;
