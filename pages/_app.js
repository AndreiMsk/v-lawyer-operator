import "assets/styles/main.scss";
import { createContext, useReducer } from "react";

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
};

/* create reducer for store's context */
const storeReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.SET_CHANNEL:
      action.payload.messages.forEach(message => message.status = 'read');
      return { ...state, channel: action.payload };

    case ACTION_TYPES.SET_CHANNELS:
      return { ...state, channels: [...state.channels, ...action.payload] };

    case ACTION_TYPES.SET_NEW_CREATED_CHANNEL:
      return { ...state, channels: [...state.channels, action.payload] };

    case ACTION_TYPES.ADD_MESSAGE_TO_MESSAGE_BAG:
      console.log('aici');
      const index = state.channels.findIndex(
        (channel) => channel.name === state.channel.name
      );
      
      state.channels[index].messages.push({ ...action.payload.message });
      return { ...state, channels: [...state.channels] };

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
