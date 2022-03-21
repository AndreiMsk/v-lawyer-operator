import { UserCircleIcon } from "@heroicons/react/solid";
var dayjs = require('dayjs')
var relativeTime = require('dayjs/plugin/relativeTime')
dayjs.extend(relativeTime)

const Message = ({ message }) => {

  return (
    <li
      className={`flex block items-end ${message.sender !== "admin" ? "justify-start" : "justify-end"
        }`}
    >
      {["guest", "user"].includes(message.sender) && (
        <span className="inline-block">
          <UserCircleIcon className="h-12 text-gray-200" />
        </span>
      )}
      <span
        className={`py-3 px-4 text-sm rounded-none my-1 inline-block  
    ${["guest", "user"].includes(message.sender)
            ? "border b-gray-100  rounded-t-2xl rounded-br-2xl text-gray-800 bg-transparent"
            : "bg-gray-200 border border-gray-200 text-slate-800 rounded-t-2xl rounded-bl-2xl"
          }`}
      >
        {message.message}
        <p className="text-xxs pt-1 text-right opacity-50">{dayjs(message.created_at).fromNow()}</p>
      </span>
      {["admin"].includes(message.sender) && (
        <span className="inline-block h-10 w-10 rounded-full ml-1 mb-2">
          <span className="block h-10 w-10 text-gray-200">
            <img
              className="block h-full w-full rounded-full  ring-2 ring-gray-200 ml-1"
              src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt={message.sender}
            />
          </span>
        </span>
      )}
    </li>

  );
};

export default Message;
