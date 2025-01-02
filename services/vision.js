import { config } from "../js/config";

const fetchVisionData = async () => {
  const data= (await fetch(`${config.baseURL}/getMissionVisionData`)).json();
  return data;
}