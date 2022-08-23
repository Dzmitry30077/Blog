import { AppThunk } from './Index'
import { getArticles } from '../api/Api'
import { IArticlesParams } from "../types/Types"


export const getArticleThunk = (url: string, params: IArticlesParams): AppThunk => async (dispatch) => {
  getArticles(url, params)
   .then((data) => {
    dispatch({
      type: "PUSH_ARTICLES",
      payload: data
    })
   })
}