import Layout from "layouts/AdminLayout";
import { useAuth } from "hooks/auth";
import PersonalInformation from "components/profile/PersonalInformation";

const Profile = () => {

  const { logout, user } = useAuth({ middleware: 'auth' })

  return (
    <div className="flex justify-center items-center flex-col w-full p-12">

      <span className="h-36 w-36 rounded-md overflow-hidden bg-gray-100">
        <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      </span>

      <PersonalInformation />

    </div>
  );
};

/* get default layout */
Profile.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Profile;
