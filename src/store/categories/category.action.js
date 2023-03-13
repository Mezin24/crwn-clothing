import { createAction } from '../../utils/reducer.util';
import { CATEGORIES_ACTION_TYPES } from './category.type';

export const setCategories = (categoriesArr) =>
  createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categoriesArr);
