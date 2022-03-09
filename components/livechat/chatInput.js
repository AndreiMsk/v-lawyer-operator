import { useState } from "react";
import { sendMessage } from "utils/dataService";
import { TrashIcon } from "@heroicons/react/solid";

const ChatInput = ({ channel }) => {
  /* initiate state */
  let [message, setMessage] = useState("");

  /* bind textarea value to local state */
  const handleOnChange = (e) => setMessage(e.target.value);

  const handleSendMessage = async (event) => {
    event.preventDefault();

    /* safeguard block if no channel is selected or message is empty */
    if (!channel || !message) return;

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
    <form
      action="#"
      className="flex flex-col w-full h-full rounded-md drop-shadow-2xl bg-white rounded-md mb-1"
    >
      <div className="w-full h-2/3 rounded-md">
        <textarea
          rows={2}
          name="description"
          id="description"
          className="block w-full h-full border-0 p-3 resize-none placeholder-gray-500 focus:ring-0 sm:text-sm rounded-md"
          placeholder="Send your reply ..."
          value={message}
          onChange={handleOnChange}
        />
      </div>
      <div className="flex justify-between items-center px-4">
        <span className="h-8 inline-block cursor-pointer">
          <TrashIcon className="h-full text-red-500" />
        </span>
        <button
          onClick={handleSendMessage}
          type="submit"
          className="mt-2 w-32 inline items-center px-4 py-3 border border-transparent text-xs font-medium rounded-md shadow-sm text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
        >
          Send message
        </button>
      </div>
    </form>
  );
};

export default ChatInput;
