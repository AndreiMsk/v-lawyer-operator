import { XCircleIcon } from "@heroicons/react/solid";
import Message from "./Message";
import { closeChat } from "services/apiService";
import { ACTION_TYPES } from "pages/_app";
import ConfirmationModal from "components/globals/ConfirmationModal";
import { useState } from "react";

const ChatMessageBox = ({ channel, dispatch }) => {

  const [showConfirmation, setShowConfirmation] = useState(false);

  const texts = {
    title: 'Close chat',
    text: 'Are you sure you want to close this chat? You will not be able to communicate further with this user. This action cannot be undone.',
    closeButtonText: 'End this chat'
  }

  const handleCloseChatConfirmation = async (event) => {
    if (!channel) return;

    event.preventDefault();

    setShowConfirmation(true);
  };

  const handleCloseChat = async () => {
    if (!channel) return;

    dispatch({
      type: ACTION_TYPES.REMOVE_CHANNEL,
      payload: channel,
    });
    closeChat(channel);
  };

  return (
    <div className="bg-white w-full h-full rounded-md drop-shadow-2xl flex flex-col justify-start p-1">
      {
        showConfirmation && <ConfirmationModal
          title={texts.title} text={texts.text}
          confirm={handleCloseChat}
          close={() => setShowConfirmation(false)}
          closeButtonText={texts.closeButtonText}
        />
      }

      <div onClick={handleCloseChatConfirmation} className={`text-xs absolute right-0 top-0 bg-gray-400 px-2 py-1 rounded-sm cursor-pointer flex justify-center items-center text-white 
      ${!channel ? 'cursor-not-allowed' : 'hover:bg-red-500'}`}>
        Close chat
        <XCircleIcon className="text-white h-4 ml-1" />
      </div>
      <ul className="overflow-auto mt-6 px-4">
        {channel?.messages.map((channelMessage, key) => <Message message={channelMessage} key={key} />)}
      </ul>
    </div>
  );
};

export default ChatMessageBox;
