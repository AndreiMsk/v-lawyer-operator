import ChatInfo from "components/livechat/chatInfo";
import ChatMessageBox from "components/livechat/chatMessageBox";
import ChatInput from "components/livechat/chatInput";
import { useContext } from "react";
import { sendMessage } from "utils/dataService";
import { StoreContext } from "pages/_app";

const LiveChatContainer = () => {
  
  const { state: { channel, channels } } = useContext(StoreContext);

  return (
    <div className="grid grid-cols-12 gap-4 p-12 w-full h-screen max-h-screen">
      {/* Chat info component */}
      <div className="col-span-3">
        <ChatInfo channel={channel} channels={channels} />
      </div>

      {/* chat message box component */}
      <div className="col-span-9">
        <ChatMessageBox channel={channel} />
        <ChatInput channel={channel} />
      </div>
    </div>
  );
};

export default LiveChatContainer;
