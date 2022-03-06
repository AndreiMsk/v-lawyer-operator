import ChatInfo from "components/livechat/chatInfo";
import Channels from "components/livechat/chatChannels";
import { ChatAlt2Icon } from "@heroicons/react/solid";
import ChatMessageBox from "components/livechat/chatMessageBox";
import ChatInput from "components/livechat/chatInput";
import { useState, useEffect } from "react";
import { sendMessage } from "utils/dataService";

const LiveChatContainer = () => {

  /* initialize state */
  let [messages, setMessageBag] = useState([]);
  let [channel, setChannel] = useState('');

  /* add to messages */
  const addToMessages = async (value) => {
    // setMessageBag([...messages, { message: value }]);

    const {data: {data}} = await sendMessage(null, value);
    if(channel === data) return;
    
    setChannel(data);
  };

  return (
    <div className="grid grid-cols-12 gap-4 w-full h-screen p-12">
      <div className="col-span-3">

        {/* page title */}
        <div className="col-span-12 flex justify-start items-center">
          <ChatAlt2Icon className="h-14 w-14 bg-gray-100 rounded-full text-gray-600 p-2" />
          <h1 className="font-bold ml-3">Live chat</h1>
        </div>

        {/* Chat info component */}
        <div className="mt-6">
          <ChatInfo />
        </div>
      </div>

      {/* chat message box component */}
      <div className="col-span-9">
        <ChatMessageBox />
        <ChatInput addMessage={addToMessages} />
      </div>

    </div>
  );
};

export default LiveChatContainer;