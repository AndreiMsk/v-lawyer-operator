import SidebarType from "components/sidebar";
import { getLiveChatChannels } from "utils/dataService";
import React, { useEffect, useContext } from "react";
import Echo from "laravel-echo";
var client = require("pusher-js");
import { ACTION_TYPES, StoreContext } from "pages/_app";

const Layout = ({ children }) => {
  /* get access to context */
  const { dispatch, state } = useContext(StoreContext);

  const setUpEcho = async () => {
    /* 1. Get listenting channels for admin account: ALL */
    const {
      data: { data },
    } = await getLiveChatChannels();

    /* set channels in context */
    dispatch({
      type: ACTION_TYPES.SET_CHANNELS,
      payload: data,
    });

    /* 2. Create echo instance  */
    const echo = new Echo({
      broadcaster: "pusher",
      key: "356cc28c7b5cd8012ac2",
      cluster: "eu",
      encrypted: true,
      authEndpoint: "localhost:3000/api/broadcasting/auth",
    });

    echo.channel(`admin-channel`).listenToAll((event, data) => {
      
      /* add new channel to the ones we currently have stored */
      dispatch({
        type: ACTION_TYPES.SET_NEW_CREATED_CHANNEL,
        payload: data.channel,
      });

      /* listen for this new channel */
      echo.channel(`${data.channel.name}`).listenToAll((event, data) => {
        /* add to context */
        dispatch({
          type: ACTION_TYPES.ADD_MESSAGE_TO_MESSAGE_BAG,
          payload: data,
        });
      });
    });

    /* 3. Listen on all open channels */
    for (const channel of data) {
      echo.channel(`${channel.name}`).listenToAll((event, data) => {
        /* add to context */
        dispatch({
          type: ACTION_TYPES.ADD_MESSAGE_TO_MESSAGE_BAG,
          payload: data,
        });
      });
    }

    /* 4. set rules on different scenarios */
  };

  useEffect(() => {
    setUpEcho();
  }, []);

  /* render default layout */
  return <SidebarType>{children}</SidebarType>;
};

export default Layout;
