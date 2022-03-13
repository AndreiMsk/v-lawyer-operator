import Message from "./Message";

const ChatMessageBox = ({ channel }) => {
  return (
    <div className="bg-white w-full h-full rounded-md drop-shadow-2xl flex flex-col justify-start p-1">
      <ul className="overflow-auto">
        {channel?.messages.map((channelMessage, key) => <Message message={channelMessage} key={key} />)}
      </ul>
    </div>
  );
};

export default ChatMessageBox;
