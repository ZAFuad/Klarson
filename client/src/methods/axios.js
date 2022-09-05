import axios from "axios";
import { path1, path2 ,path3 } from "../env/env";

const instance = axios.create({
  baseURL: path1.toString(),
});
const appInstance = axios.create({
  baseURL: path2.toString(),
});
const bankInstance = axios.create({
  baseURL: path3.toString(),
});
export { instance, appInstance ,bankInstance};
