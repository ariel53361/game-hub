import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "cb2a53df98814282b0f70e500a3f1424",
  },
});