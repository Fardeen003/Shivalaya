import { config } from "../js/config";

const fetchLeadershipData = async () => {
  const data= (await fetch(`${config.baseURL}/getProject`)).json();
  return data;
}