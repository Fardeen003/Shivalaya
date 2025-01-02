import { config } from "../js/config";

const fetchMediaCenterDetailData = async () => {
  const data= (await fetch(`${config.baseURL}/getMediaCenterDetails`)).json();
  return data;
}