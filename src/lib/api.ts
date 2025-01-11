import axios from "axios";

const apiKey = process.env.COINGECKO_API_KEY;

console.log(apiKey);

export const api = axios.create({
  baseURL: "https://api.coingecko.com/api/v3",
  headers: {
    x_cg_demo_api_key: apiKey,
  },
});
