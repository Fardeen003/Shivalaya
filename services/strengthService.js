import { config } from "../js/config";

const fetchStrengthData = async () => {
  const data= (await fetch(`${config.baseURL}/getStrength`)).json();
  return data;
}