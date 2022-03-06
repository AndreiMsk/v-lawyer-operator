import SidebarType from "components/sidebar";
import { getLiveChatChannels } from "utils/dataService";
import React, { useEffect, useState } from "react";
import Echo from "laravel-echo";
var client = require("pusher-js");

const Layout = ({ children }) => {
  /* set channels on local state */
  const [channels, setChannels] = useState([]);

  useEffect(() => {

    const setUpEcho = async () => {

      /* 1. Get listenting channels for admin account: ALL */
      const { data: { data } } = await getLiveChatChannels();
      setChannels(data);

      /* 2. Create echo instance  */
      const echo = new Echo({
        broadcaster: "pusher",
        key: "356cc28c7b5cd8012ac2",
        cluster: "eu",
        encrypted: true,
        authEndpoint: "localhost:3000/api/broadcasting/auth",
      });

      echo.channel('my-chat-channel').listenToAll((event, data) => {
        console.log(event, data);
      });

      /* 3. Listen on all open channels */
      // for (const channel of channels) {
      //   echo.channel(`.${channel.name}`).listenToAll((event, data) => {
      //     console.log(event, data);
      //   });
      // }
    };

    setUpEcho();
  }, []);

  /* render default layout */
  return <SidebarType>{children}</SidebarType>;
};

export default Layout;
