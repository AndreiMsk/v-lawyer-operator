import { useState } from "react";
import { sendMessage, closeChat } from "services/apiService";
import { TrashIcon } from "@heroicons/react/solid";
import { ACTION_TYPES } from "pages/_app";

const ChatInput = ({ dispatch, channel }) => {
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

  const handleCloseChat = async (event) => {
    event.preventDefault();

    if (!channel) return;

    dispatch({
      type: ACTION_TYPES.REMOVE_CHANNEL,
      payload: channel,
    });

    closeChat(channel);
  };

  return (
    <form
      action="#"
      className="flex flex-col w-full h-full rounded-md drop-shadow-2xl bg-white rounded-md mb-1"
    >
      <div className="w-full h-2/3 rounded-md">
        <textarea
          rows={2}
          name="description"
          id="description"
          className={`block w-full h-full border-0 p-3 resize-none placeholder-gray-500 sm:text-sm rounded-md focus:outline-none focus:ring-none focus:ring-gray-50,
          ${!channel
              ? "bg-gray-100 opacity-75 cursor-not-allowed focus:outline-none focus:ring-none focus:ring-gray-50"
              : ""
            } `}
          placeholder="Send your reply ..."
          value={message}
          onChange={handleOnChange}
          readOnly={!channel ? "readonly" : ""}
        />
      </div>
      <div className="flex justify-between items-center px-4">
        <span
          className={`h-8 inline-block cursor-pointer ${channel ? "cursor-pointer" : "opacity-50 cursor-not-allowed"}`}
          onClick={handleCloseChat}
        >
          <TrashIcon className="h-full text-red-500" />
        </span>
        <button
          onClick={handleSendMessage}
          className={`mt-2 w-32 inline items-center px-4 py-3 border border-transparent text-xs font-medium rounded-md shadow-sm text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 ${channel && channel.id
            ? "cursor-pointer" : "opacity-50 cursor-not-allowed"
            }`}
        >
          Send message
        </button>
      </div>
    </form>
  );
};

export default ChatInput;
