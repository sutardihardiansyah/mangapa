import axios from "axios";
// const baseUrl = "http://localhost:5000/";
const baseUrl = "https://mangapaapi.mangapa.site/";

export default axios.create({
  baseURL: baseUrl,
});
