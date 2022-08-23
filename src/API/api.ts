import axios from "axios";
import { IArticlesParams } from "../types/Types";


export const apiIntance = axios.create({
  baseURL: "https://api.spaceflightnewsapi.net/v3"
});

export const getArticles = async (url: string, params: IArticlesParams) => {
  try {
    const response = await apiIntance.get(url, {
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

export const getPost = async (url: string, id: string) => {
  try {
    const response = await apiIntance.get(`${url}/${id}`)
    return response.data
  } catch (error) {
    console.error(error);
  }
}