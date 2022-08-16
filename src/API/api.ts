import axios from "axios";
import { IArticlesParams } from "../types/Types";

export const url = "https://api.spaceflightnewsapi.net/v3/articles";

export const getArticles = async (params: IArticlesParams) => {
  try {
    const response = await axios.get(url, {
      params: {
        _limit: params.limit,
        _start: +(params.page) * params.limit - params.limit,
        _title_contains: params.search,
        _sort: params.sort
      }
    });
    return response.data
  } catch (error) {
    console.error(error);
  }
}