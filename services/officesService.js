import { config } from "../js/config";

const fetchOfficeData = async () => {
  const data= (await fetch(`${config.baseURL}/getOffices`)).json();
  return data;
}