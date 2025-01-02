import { config } from "../js/config";

const fetchProjectData = async () => {
  const data= (await fetch(`${config.baseURL}/getProjectData`)).json();
  return data;
}