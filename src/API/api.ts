import axios from "axios";

export const url = "https://api.spaceflightnewsapi.net/v3/articles";

export const getArticles = async (params: any) => {
  try {
    const response = await axios.get(url, {
      params: {
        _limit: params.limit
      }
    });
    return response.data
  } catch (error) {
    console.error(error);
  }
}