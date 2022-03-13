import ChannelInfo from "components/livechat/ChannelInfo";
import ChatChannels from "components/livechat/ChatChannels";
import ChatMessageBox from "components/livechat/ChatMessageBox";
import ChatInput from "components/livechat/ChatInput";
import { StoreContext } from "pages/_app";
import { useContext } from "react"


const LiveChatContainer = () => {

  /* import from Store CONTEXT */
  const { dispatch, state: { channel, user, channels } } = useContext(StoreContext);

  return (
    <div className="flex h-screen bg-white">

      {/* left side  */}
      <div className="flex-none w-24 md:w-56 h-full">

        {/* channel info: currently selected channel, user type etc */}
        <div className="flex flex-col justify-center items-center h-2/6 px-3 pb-1 pt-3">
          <ChannelInfo channel={channel} user={user} />
        </div>
        {/* a list of active channels */}
        <div className="flex flex-col justify-center items-center h-4/6 px-3 pt-1 pb-3">
          <ChatChannels dispatch={dispatch} channel={channel} channels={channels} />
        </div>
      </div>

      {/* right side */}
      <div className="flex-grow w-64 h-full">

        {/* chat message box renderer */}
        <div className="flex flex-col justify-center items-center h-4/6 pr-3 pb-1 pt-2">
          <ChatMessageBox channel={channel} />
        </div>

        {/* <ChatInput /> */}
        <div className="flex flex-col justify-center items-center h-2/6 pr-3 pb-2 pt-2">
          <ChatInput dispatch={dispatch} channel={channel} />
        </div>

      </div>
    </div>
  );
};

export default LiveChatContainer;
