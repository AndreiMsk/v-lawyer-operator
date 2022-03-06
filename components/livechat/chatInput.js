import { useState } from "react";

const ChatInput = ({addMessage}) => {

  /* init message reactive local state */
  const [message, setMessage] = useState("");

  /* bind textarea value to local state */
  const handleWriteMessage = (e) => setMessage(e.target.value);

  /* send value to parent component using prop passed down */
  const sendMessage = (event) => {
    event.preventDefault();
    addMessage(message);
    setMessage("");
  };

  return (
    <form action="#" className="relative">
      <div className="border border-gray-300 rounded-b-lg shadow-sm overflow-hidden focus-within:border-gray-500 focus-within:ring-1 focus-within:ring-gray-500 border-t-white">
        <textarea
          rows={2}
          name="description"
          id="description"
          className="block w-full border-0 p-2 resize-none placeholder-gray-500 focus:ring-0 sm:text-sm"
          placeholder="Send your reply ..."
          value={message}
          onChange={handleWriteMessage}
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
             onClick={sendMessage}
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
