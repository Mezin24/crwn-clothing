import { createAction } from '../../utils/reducer.util';
import { USER_ACTION_TYPES } from './user.types';

export const setCurrentUser = (user) => {
  return createAction(USER_ACTION_TYPES.SET_USER, user);
};
