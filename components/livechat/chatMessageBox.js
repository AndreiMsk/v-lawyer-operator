const chatMessageBox = ({ channel }) => {
  console.log(channel);
  
  return (
    <div className="bg-gray-50 rounded-md p-4 border border-gray-200 overflow-scroll">
      <ul className="overflow-auto">
        {channel &&
          channel.messages.map((message, key) => {
            return (
              <li key={key} className="p-1">
                <span className="p-4 bg-gray-400 text-white text-xs rounded-none my-1 rounded-t-xl rounded-bl-xl inline-block w-3/4">
                  {message.message}
                </span>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default chatMessageBox;
