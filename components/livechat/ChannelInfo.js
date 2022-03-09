import { ChatAlt2Icon } from "@heroicons/react/solid";

const ChannelInfo = ({ channel, user }) => {
  return (
    <div className="bg-white w-full h-full rounded-md drop-shadow-2xl flex flex-col justify-center items-center">
      
      {/* chat logo */}
      <ChatAlt2Icon className="h-20 w-20 text-slate-700" />

      {/* chat name */}
      <h2 className="pt-2 text-gray-800 font-semibold">
        {user ? user.name : channel ? `#${channel.name}` : " No chat selected"}
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
  );
};

export default ChannelInfo;
