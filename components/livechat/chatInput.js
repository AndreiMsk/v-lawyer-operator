import { useContext, useState } from "react";
import { sendMessage } from "utils/dataService";
import { ACTION_TYPES, StoreContext } from "pages/_app";

const ChatInput = ({channel}) => {

  /* initiate state */
  let [message, setMessage] = useState("");

  /* bind textarea value to local state */
  const handleOnChange = (e) => setMessage(e.target.value);

  /* get access to context */
  const { dispatch } = useContext(StoreContext);

  /* extract messages from context */
 
  const handleSendMessage = async (event) => {
    event.preventDefault();

    /* safeguard block if no channel is selected or message is empty */
    if(!channel && !message ) return;

    /* send message to API to retrieve the channel name to listen for */
    await sendMessage(channel.name, message);

    /* reset textarea message */
    setMessage("");
  };

  return (
    <form action="#" className="relative">
      <div className="border border-gray-300 rounded-b-lg shadow-sm overflow-hidden focus-within:border-gray-500 focus-within:ring-1 focus-within:ring-gray-500 border-t-white h-4/5">
        <textarea
          rows={2}
          name="description"
          id="description"
          className="block w-full border-0 p-2 resize-none placeholder-gray-500 focus:ring-0 sm:text-sm"
          placeholder="Send your reply ..."
          value={message}
          onChange={handleOnChange}
        />

        {/* Spacer element to match the height of the toolbar */}
        <div aria-hidden="true">
          <div className="h-14" />
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-px">
        <div className="border-t border-gray-200 px-2 py-2 flex justify-end items-center space-x-3 sm:px-3">
          <div className="flex-shrink-0">
            <button
              onClick={handleSendMessage}
              type="submit"
              className="inline-flex items-center px-4 py-2 border border-transparent text-xs font-medium rounded-md shadow-sm text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              Send message
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ChatInput;
