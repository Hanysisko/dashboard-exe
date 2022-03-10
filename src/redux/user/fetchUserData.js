import axios from "axios";
import { fetchDataRequest, fetchDataSuccess } from "./user.actions.js";

export const fetchUsers = () => {
  return dispatch => {
    dispatch(fetchDataRequest());
    axios
      .get(
        "https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data"
      )
      .then(response => {
        dispatch(fetchDataSuccess(response.data));
      })
  };
}