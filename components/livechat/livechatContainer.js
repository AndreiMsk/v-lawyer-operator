import ChatChannels from "components/livechat/ChatChannels";
import ChatMessageBox from "components/livechat/ChatMessageBox";
import ChatInput from "components/livechat/ChatInput";
import { StoreContext } from "pages/_app";
import { useContext } from "react"


const LiveChatContainer = () => {

  /* import from Store CONTEXT */
  const { dispatch, state: { channel, user, channels } } = useContext(StoreContext);

  return (
    <div className="flex h-full bg-white p-3">

      {/* left side */}
      <div className="flex-grow w-64 h-full pt-1">

        {/* chat message box renderer */}
        <div className="flex flex-col justify-center items-center h-5/6 px-3 pb-1 pt-2">
          <ChatMessageBox channel={channel} dispatch={dispatch}/>
        </div>

        {/* <ChatInput /> */}
        <div className="flex flex-col justify-center items-center h-1/6 px-3 pb-2 pt-2">
          <ChatInput dispatch={dispatch} channel={channel} />
        </div>

      </div>
      {/* right side  */}
      <div className="flex-none w-24 md:w-72 h-full pt-2">

        {/* a list of active channels */}
        <div className="flex flex-col justify-center items-center h-full px-3 pt-1 pb-3">
          <ChatChannels dispatch={dispatch} channel={channel} channels={channels} />
        </div>
      </div>
    </div>
  );
};

export default LiveChatContainer;
