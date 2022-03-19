import { ChatIcon } from "@heroicons/react/solid";
import UserIcon from "components/icons/User";
import { updateMessageStatus } from "services/apiService";
import { ACTION_TYPES } from "pages/_app";

const ChatChannels = ({ dispatch, channel, channels }) => {
  
  /* blend css classes */
  const classNames = (...classes) => {
    return classes.filter(Boolean).join(" ");
  };

  /* handle select live chat channel */
  const handleSelectChannel = (channelName) => {
    dispatch({
      type: ACTION_TYPES.SET_CHANNEL,
      payload: channelName,
    });

    updateMessageStatus(channelName);
  };

  return (
    <div className="bg-white w-full h-full rounded-md drop-shadow-2xl flex flex-col justify-start p-3">
      <ul className="py-2 overflow-y-scroll">
        {channels &&
          channels.length > 0 &&
          channels.map((channelObject, key) => (
            <li
              onClick={() => handleSelectChannel(channelObject)}
              key={key}
              className={classNames(
                channel && channel.name === channelObject.name
                  ? "border border-gray-300 bg-gray-50"
                  : "text-white hover:bg-gray-100 hover:bg-opacity-75 hover:text-gray-500",
                "group flex items-center p-1 text-xs font-medium rounded-md text-gray-700 cursor-pointer relative"
              )}
            >
              <span className="inline-block rounded-full  bg-gray-200 mr-4 relative h-10 w-10 hover:bg-gray-400">
                <UserIcon className="h-6 w-10 text-gray-400 mt-1 hover:text-white" />
                {channel?.name !== channelObject.name &&
                  channelObject.messages.find(
                    (message) =>
                      message.status === "not_read" &&
                      message.sender !== "admin"
                  ) && (
                    <span className="inline-block absolute bottom-6 left-7">
                      <ChatIcon className="h-6 text-red-500" />
                    </span>
                  )}
              </span>
              <span className="inline-block">#{channelObject.name}</span>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ChatChannels;
