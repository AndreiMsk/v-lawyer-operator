import { PencilIcon } from "@heroicons/react/solid";

const Header = () => {
    return (
        <div className="flex  md:flex-row flex-col justify-start w-full p-6 items-center bg-gray-100">

            <div className="flex shrink-0 mr-4 relative drop-shadow-2xl">
                <img
                    className="block h-36 w-36 rounded-full ring-8 ring-white hover:opacity-50 cursor-pointer"
                    src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                />
                <span className="cursor-pointer hover:opacity-75">
                    <PencilIcon className="h-8 text-yellow-500 absolute top-28 right-14"/>
                </span>
            </div>

            <div className="flex flex-grow md:pl-4  pl-0 flex-col pb-2 md:mt-1 mt-5 w-full">

                {/* General: name and phone and title */}
                <h1 className="font-bold text-3xl text-gray-800">Mosica Andrei</h1>
                <div className="flex flex-row mt-3">
                    <h2 className="mr-12 text-xs">Telephone: <span className="text-xs bg-yellow-500 text-white rounded-sm px-2 py-1">0723.3123.1314 </span></h2>
                    <h2 className="text-xs">E-mail: <span className="text-xs bg-yellow-500 text-white rounded-sm px-2 py-1">andrei.mosica@gmail.com </span></h2>
                </div>

                {/* Earning cards */}
                <div className="grid sm:grid-cols-4 grid-cols-1 md:gap-4 gap-2 mt-8">
                    <div className="rounded-sm h-20 flex justify-center items-center flex-col bg-white drop-shadow-md">
                        <h2 className="text-2xl font-bold text-gray-700">75%</h2>
                        <h6 className="text-xs text-gray-500">Profile completion</h6>
                    </div>
                    <div className="rounded-sm h-20 flex justify-center items-center flex-col bg-white drop-shadow-md">
                        <h2 className="text-2xl font-bold text-gray-700">14</h2>
                        <h6 className="text-xs text-gray-500">Completed calls</h6>
                    </div>
                    <div className="rounded-sm h-20 flex justify-center items-center flex-col bg-white drop-shadow-md">
                        <h2 className="text-2xl font-bold text-gray-700">810 <span className="text-sm">&euro;</span></h2>
                        <h6 className="text-xs text-gray-500">Earnings this month</h6>
                    </div>
                    <div className="border border-yellow-500 rounded-sm h-20 flex justify-center items-center flex-col bg-yellow-500 drop-shadow-md">
                    <h2 className="text-2xl font-bold text-white">3245 <span className="text-sm">&euro;</span></h2>
                        <h6 className="text-xs text-white">Total earnings</h6>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Header;