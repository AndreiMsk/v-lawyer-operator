import Layout from "layouts/admin";

const Team = () => {
  return (
    <div className="flex justify-center items-center h-screen text-gray-800 -mt-20">
      <div className="bg-gray-500 text-white rounded-lg p-20 text-center">
        <p className="text-2xl">Team </p>
        <p className="text-xs">To be developed </p>
      </div>
    </div>
  );
};

/* get default layout */
Team.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Team;
