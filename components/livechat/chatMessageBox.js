const ChatMessageBox = ({ channel }) => {  
  return (
    <div className="bg-white w-full h-full rounded-md drop-shadow-2xl flex flex-col justify-start p-3">
      <ul className="overflow-auto">
        {channel &&
          channel.messages.map((message, key) => {
            return (
              <li key={key} className="p-1">
                <span className="p-4 bg-gray-500 text-white text-xs rounded-none my-1 rounded-t-xl rounded-bl-xl inline-block w-3/4">
                  {message.message}
                </span>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default ChatMessageBox;
