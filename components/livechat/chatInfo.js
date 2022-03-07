import { ChatAlt2Icon } from "@heroicons/react/solid";
import { ACTION_TYPES, StoreContext } from "pages/_app";
import UserIcon from "components/icons/User";
import { useContext } from "react";
import { updateMessageStatus } from "utils/dataService";

const ChatInfo = ({ channel, channels }) => {
  /* extracted dispatch and state user */
  const {
    dispatch,
    state: { user },
  } = useContext(StoreContext);

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
    <>
      <div className="bg-gray-50 rounded-md p-2 flex justify-center flex-col items-center border border-gray-200 pb-65 h-2/5">
        {/* chat logo */}
        <span className="inline-block h-14 w-14 rounded-full overflow-hidden bg-gray-200 mt-6 p-1">
          <ChatAlt2Icon className="h-full w-full text-gray-600" />
        </span>

        {/* chat name */}
        <h2 className="pt-2 text-gray-800 font-semibold">
          {user ? user.name : channel ? `#${channel.name}` : " Select chat"}
        </h2>

        {/* chat badge:  user or guest */}
        {channel && (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs bg-gray-600 text-gray-100 mt-0 pt-0">
            {!user ? "Guest" : "Logged in User"}
          </span>
        )}
        {!channel && (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs bg-gray-600 text-gray-100 mt-0 pt-0">
            User
          </span>
        )}
      </div>
      <div className="bg-gray-50 rounded-md p-2 flex justify-start flex-col border border-gray-200 mt-2 px-2 h-3/5">
        <ul>
          {channels &&
            channels.length > 0 &&
            channels.map((channelObject, key) => (
              <li
                onClick={() => handleSelectChannel(channelObject)}
                key={key}
                className={classNames(
                  channel && channel.name === channelObject.name
                    ? "border border-gray-300 bg-gray-200"
                    : "text-white hover:bg-gray-600 hover:bg-opacity-75 hover:text-white",
                  "group flex items-center p-1 text-xs font-medium rounded-md text-gray-700 cursor-pointer"
                )}
              >
                <span className="inline-block h-8 w-8 rounded-full overflow-hidden bg-gray-200 mr-2">
                  <UserIcon className="h-full w-full text-gray-300" />
                </span>
                <span className="inline-block">#{channelObject.name}</span>
                { channel?.name !== channelObject.name &&  channelObject.messages.find((message) => message.status === "not_read") && 
                  ( <span className="flex h-3 w-3 bg-red-500 rounded-full"></span> )}
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};

export default ChatInfo;
