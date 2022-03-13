import "assets/styles/main.scss";
import { createContext, useReducer } from "react";
import { findIndex } from "lodash";

/* instantiate context */
export const StoreContext = createContext();

/* instantiate context provider */
const StoreProvider = ({ children }) => {
  
  /* instantiate initial state */
  const initialState = {
    channel: null, // current channel where transimition is being made
    channels: [], // all open channels (status active from API)
    user: null, // currently authenticated user
  };

  /* instantiate reducer and state */
  const [state, dispatch] = useReducer(storeReducer, initialState);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

/* action Types */
export const ACTION_TYPES = {
  SET_CHANNEL: "SET_CHANNEL",
  SET_CHANNELS: "SET_CHANNELS",
  ADD_MESSAGE_TO_MESSAGE_BAG: "ADD_MESSAGE_TO_MESSAGE_BAG",
  SET_CHANNEL_NEWLY_CREATED: "SET_CHANNEL_NEWLY_CREATED",
  REMOVE_CHANNEL: "REMOVE_CHANNEL",
};

/* create reducer for store's context */
const storeReducer = (state, action) => {
  switch (action.type) {
    
    /* set channel and update all the messages to "READ" */
    case ACTION_TYPES.SET_CHANNEL:
      action.payload.messages.forEach((message) => (message.status = "read"));
      return { ...state, channel: action.payload };

    /* set all channels comming in from the API - used in ChannelList Component as props  */
    case ACTION_TYPES.SET_CHANNELS:
      return { ...state, channels: [...action.payload] };

    /* pushes the newly created channel comming from the app.js listener to the existing channels */
    case ACTION_TYPES.SET_CHANNEL_NEWLY_CREATED:
      return { ...state, channels: [...state.channels, { ...action.payload }] };

    /* 
    * searches channel and adds message to it
    * NO duplicates allowed (query done by ID)
    */
    case ACTION_TYPES.ADD_MESSAGE_TO_MESSAGE_BAG:
      if (!state.channels.length) {
        const channels = state.channels.push({
          ...action.payload.channel,
          messages: { ...action.payload.message },
        });
        return { ...state, channels };
      }

      const channelIndex = findIndex(state.channels, {
        id: action.payload.channel.id,
      });

      const messageExists = state.channels[channelIndex].messages.some(
        (c) => c.id === action.payload.message.id
      );
      console.log("DOES THIS MESSAGE EXISTS ?  ", messageExists);

      if (messageExists) {
        return { ...state };
      }

      state.channels[channelIndex].messages.push({ ...action.payload.message });
      return { ...state };
    
    /* 
    * filter channels and return all the rest except the channel sent as payload 
    * Removes channel from API too (sets channel's status to "closed" )
    */
    case ACTION_TYPES.REMOVE_CHANNEL:
      const channels = state.channels.filter(
        (channel) => channel.id !== action.payload.id
      );
      return { ...state, channels: [...channels], channel: null };

    /* default, if none if the above are found */
    default:
      throw new Error(`Unhandled action type - ${action.type}`);
  }
};

export default function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <StoreProvider>{getLayout(<Component {...pageProps} />)}</StoreProvider>
  );
}
