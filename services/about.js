import { config } from "../js/config";

const fetchAboutData = async () => {
  const data= (await fetch(`${config.baseURL}/getAboutUsData`)).json();
  return data;
}