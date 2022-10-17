import axios from "axios";

const fetcher = axios.create({
  baseURL: "https://pacific-sierra-39351.herokuapp.com/",
});

export default fetcher;
