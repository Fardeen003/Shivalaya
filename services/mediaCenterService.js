import { config } from "../js/config";

const fetchMediaCenterData = async () => {
  const data= (await fetch(`${config.baseURL}/getMediaCenter`)).json();
  return data;
}