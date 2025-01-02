import { config } from "../js/config";

const fetchCurrentOpeningpData = async () => {
  const data= (await fetch(`${config.baseURL}/getCurrentOpenings`)).json();
  return data;
}