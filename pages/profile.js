import Layout from "layouts/AdminLayout";
import PersonalInformation from "components/profile/PersonalInformation";
import Header from "components/profile/Header";
import BusinessInformation from "components/profile/BusinessInformation";

const Profile = () => {

  return (
    <div className=" w-full overflow-y-scroll min-h-screen mb-2 pb-6">

      <Header />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <PersonalInformation />
        <BusinessInformation />
      </div>

    </div>
  );
};

/* get default layout */
Profile.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Profile;
