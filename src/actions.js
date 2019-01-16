import {
  ADD_DB
} from "./constants";
export const addDb = dbData => ({
  type: ADD_DB,
  payload: dbData
});

