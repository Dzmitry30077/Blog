import { AppThunk } from "./index"
import { getArticles } from "../API/api"


export const getArticleThunk = (): AppThunk => async (dispatch) => {
  getArticles(12)
   .then((data) => {
    dispatch({
      type: "PUSH_ARTICLES",
      payload: data
    })
   })
}