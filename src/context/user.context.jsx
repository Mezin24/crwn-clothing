import { createContext, useContext, useReducer, useEffect } from 'react';
import {
  onAuthStateChangeListener,
  createUserDocumentFromAuth,
} from '../firebase/firebase.utils';
import { createAction } from '../utils/reducer.util';

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => {},
});

const USER_ACTION_TYPES = {
  SET_USER: 'SET_USER',
};

const INITIAL_STATE = {
  currentUser: null,
};

const userReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case USER_ACTION_TYPES.SET_USER:
      return {
        ...state,
        currentUser: payload,
      };
    default:
      throw new Error(`Unhandled action type ${type} in user reducer`);
  }
};
export const useUserContext = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [{ currentUser }, dispatch] = useReducer(userReducer, INITIAL_STATE);

  const setCurrentUser = (user) => {
    dispatch(createAction(USER_ACTION_TYPES.SET_USER, user));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChangeListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  const value = { currentUser };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
