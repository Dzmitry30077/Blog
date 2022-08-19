import { AppThunk } from "./index"
import { getArticles } from "../API/api"
import { IArticlesParams } from "../types/Types"


export const getArticleThunk = (params: IArticlesParams): AppThunk => async (dispatch) => {
  getArticles(params)
   .then((data) => {
    dispatch({
      type: "PUSH_ARTICLES",
      payload: data
    })
   })
}