import { config } from "../js/config";

const fetchJoinUsData = async () => {
  const data= (await fetch(`${config.baseURL}/getJoinUs`)).json();
  return data;
}