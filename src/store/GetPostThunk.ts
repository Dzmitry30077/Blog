import { getPost } from "../api/Api";
import { AppThunk } from "./Index";

export const getPostThunk = (url: string, id: string): AppThunk => async (dispatch) => {
  getPost(url, id)
  .then((data) => {
    dispatch({
      type: 'PUSH_POST',
      payload: data
    })
  })
}