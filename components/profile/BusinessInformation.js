import { PencilIcon } from "@heroicons/react/solid";
import CreditCard from "./CreditCard";

const BusinessInformation = ({ user }) => {
    return (
        <div className="flex justify-start w-full p-6 items-center mt-4 flex-col">

            {/* PERSONAL INFORMATION */}
            <div className="border-b border-gray-200 pb-1 w-full">
                <h3 className="text-lg leading-6 font-medium text-gray-900">Billing Information</h3>
                <p className="mt-1 max-w-2xl text-xs text-gray-500">Your billing information are listed below</p>
            </div>

            <div className="w-full mt-5 text-sm">
                <h2><span className="text-gray-500">First name:</span> Andrei</h2>
                <h2><span className="text-gray-500">Last name:</span> Mosica</h2>
                <h2><span className="text-gray-500">Email:</span> andrei.mosica@gmail.com</h2>
                <h2><span className="text-gray-500">Telephone:</span> +40720005107</h2>
                <h2><span className="text-gray-500">Address:</span> Blvd. Basarabia 92, Bl. C1, Sc. B, Ap.3, Sector 2, Bucuresti</h2>

                <h2 className="mt-4"><span className="text-gray-500">Bank Account:</span> ****************1245 </h2>
                <h6 className="text-xs text-gray-400">* For security reasons your bank account can only be updated upon live verification.</h6>
                <h6 className="text-xs text-gray-400">** Contact us for assistance at: info@acestsite.com </h6>

                {/* <CreditCard /> */}

                <button className="p-3 mt-6 rounded-sm text-xs bg-gray-700 text-white hover:bg-gray-800 flex justify-center items-center">
                    <PencilIcon className="h-5 text-gray-50 mr-2" />
                    Update billing info</button>
            </div>

        </div>
    )
}

export default BusinessInformation;