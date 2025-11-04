import axios from "axios";

const apiKey = process.env.REACT_APP_YELP_API_KEY;

const baseURL =
  "https://corsproxy.io/?https://api.yelp.com/v3/businesses/search";

const opts = {
  headers: {
    Authorization: `Bearer ${apiKey}`,
  },
};

export const findParks = async (location) => {
  console.log("Calling Yelp API via CORS proxy...");
  const response = await axios.get(
    `${baseURL}?categories=playgrounds&location=${location}`,
    opts
  );
  console.log("Yelp API success:", response.data);
  return response.data.businesses || [];
};
