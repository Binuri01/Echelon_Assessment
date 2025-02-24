import axios from "axios";

const NEWS_URL = "https://newsapi.org/v2/top-headlines";

export const fetchNews = async () => {
  try {
    const response = await axios.get(NEWS_URL, {
      params: {
        country: "us",
        apiKey: process.env.API_KEY, 
      },
    });

    return response.data.articles;
  } catch (error) {
    console.error("Error fetching news:", error);
    return [];
  }
};
