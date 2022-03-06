const ChatInfo = () => {
  return (
    <div className="bg-gray-50 rounded-md p-2 flex justify-center flex-col items-center border border-gray-200 pb-6">
      
      {/* chat logo */}
      <span className="inline-block h-14 w-14 rounded-full overflow-hidden bg-gray-200 mt-6">
        <svg
          className="h-full w-full text-gray-300"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      </span>

      {/* chat name */}
      <h2 className="pt-2 text-gray-800 font-semibold">Andrei Mosica</h2>

      {/* chat badge:  user or guest */}
      <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs bg-gray-600 text-gray-100 mt-0 pt-0">
        Guest
      </span>
    </div>
  );
};

export default ChatInfo;
