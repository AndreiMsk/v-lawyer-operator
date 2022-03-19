import { useState } from "react";
import { sendMessage, closeChat } from "services/apiService";
import { ReplyIcon } from "@heroicons/react/solid";
// import { ACTION_TYPES } from "pages/_app";

const ChatInput = ({ channel }) => {
  /* initiate state */
  let [message, setMessage] = useState("");

  /* bind textarea value to local state */
  const handleOnChange = (e) => setMessage(e.target.value);

  const handleSendMessage = async (event) => {
    event.preventDefault();

    /* safeguard block if no channel is selected or message is empty */
    if (!channel || message === "") return;

    const data = new FormData();
    data.append("message", message);
    data.append("channel", channel.name);
    data.append("sender", "admin");

    /* send message to API to retrieve the channel name to listen for */
    await sendMessage(data);

    /* reset textarea message */
    setMessage("");
  };

  return (
    <div className="w-full h-full bg-blue-300 flex rounded-md">
      <div className="flex flex-grow bg-gray-200 rounded-l-md">
        <textarea
          rows={2}
          name="description"
          id="description"
          className={`bg-transparent block w-full h-full border-0 p-3 resize-none placeholder-gray-500 sm:text-sm rounded-l-md focus:outline-none focus:ring-none focus:ring-gray-50 border border-gray-200,
    ${!channel
              ? "bg-gray-200 opacity-50 cursor-not-allowed focus:outline-none focus:ring-none focus:ring-gray-50"
              : ""
            } `}
          placeholder="Type your reply ..."
          value={message}
          onChange={handleOnChange}
          readOnly={!channel ? "readonly" : ""}
        />
      </div>

      <button
        onClick={handleSendMessage}
        className={`bg-yellow-400 text-white w-40 flex justify-center items-center rounded-r-md flex-col ${channel && channel.id
          ? "cursor-pointer" : "cursor-not-allowed"
          }`}
      >
        <ReplyIcon className="text-white h-8" />
        <p className="text-xs">Send message</p>
      </button>


    </div>
  );
};

export default ChatInput;
