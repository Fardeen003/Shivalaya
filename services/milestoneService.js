import { config } from "../js/config";

const fetchMilestonesData = async () => {
  const data= (await fetch(`${config.baseURL}/getMilestonesHistory`)).json();
  return data;
}