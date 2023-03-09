import axios from "axios";

const blogFetch = axios.create({
  baseURL: "http://api.weatherapi.com/v1/current.json?key=b955bac273ba37c052d05b1db459fc3e&q=",
  headers: {
    "Content-Type": "application/json",
  },
});

export default blogFetch;