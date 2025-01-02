import { config } from "../js/config";

const fetchContactData = async () => {
  const data= (await fetch(`${config.baseURL}/getContactUs`)).json();
  return data;
}