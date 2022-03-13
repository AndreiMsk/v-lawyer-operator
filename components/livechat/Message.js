import { UserCircleIcon } from "@heroicons/react/solid";

const Message = ({ message }) => {
  return (
    <li
      className={`p-1 flex block items-center ${
        message.sender !== "admin" ? "justify-start" : "justify-end"
      }`}
    >
      {["guest", "user"].includes(message.sender) && (
        <span className="inline-block">
          <UserCircleIcon className="h-10 text-gray-500" />
        </span>
      )}
      <span
        className={`p-6 text-xs rounded-none my-1 inline-block w-3/4 
    ${
      ["guest", "user"].includes(message.sender)
        ? "bg-gray-500 text-white rounded-t-xl rounded-br-xl"
        : "bg-slate-300 border border-gray-200 text-slate-800 rounded-t-xl rounded-bl-xl"
    }`}
      >
        {message.message}
        <span className="text-xs text-white d-block"></span>
      </span>
      {["admin"].includes(message.sender) && (
        <span className="inline-block">
          <UserCircleIcon className="h-10 text-slate-300" />
        </span>
      )}
    </li>
  );
};

export default Message;
