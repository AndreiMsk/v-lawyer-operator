import SidebarType from "components/sidebar";
import { getLiveChatChannels } from "utils/dataService";
import React, { useEffect, useContext } from "react";
import Echo from "laravel-echo";
var client = require("pusher-js");
import { ACTION_TYPES, StoreContext } from "pages/_app";

const Layout = ({ children }) => {

  /* get access to context */
  const { dispatch } = useContext(StoreContext);

  useEffect(() => {
    console.log("____________ USE EFFECT! ____________");

    const chats = async () => {

      const response = await getLiveChatChannels();
      const { data: { data }  } = response;
      dispatch({ type: ACTION_TYPES.SET_CHANNELS, payload: data });


      const echo = new Echo({
        broadcaster: "pusher",
        key: "356cc28c7b5cd8012ac2",
        cluster: "eu",
        encrypted: true,
        authEndpoint: "localhost:3000/api/broadcasting/auth",
      });

      echo
        .channel("admin-channel")
        .listen(".message-sent", (e) => {
          console.log("_______MESSAGE SENT _______");
          console.log(e);
          dispatch({
            type: ACTION_TYPES.ADD_MESSAGE_TO_MESSAGE_BAG,
            payload: e,
          });
        })
        .listen(".channel-created", (e) => {
          console.log(e, "CHANNEL CREATED ________");
          dispatch({
            type: ACTION_TYPES.SET_CHANNEL_NEWLY_CREATED,
            payload: e,
          });
        });
    };

    chats();

    return (echo) => {
      console.log("_______UNSUBSCRIBE_______");
      echo.unsubscribe("admin-channel");
    };
  }, [dispatch]);

  /* render default layout */
  return <SidebarType>{children}</SidebarType>;
};

export default Layout;
