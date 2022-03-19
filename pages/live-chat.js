import Layout from "layouts/AdminLayout";
import LiveChatContainer from "components/livechat/LivechatContainer";

const Chat = () => {
  return <LiveChatContainer />;
};

/* get default layout */
Chat.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Chat;
