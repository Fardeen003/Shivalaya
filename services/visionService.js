import { config } from "../js/config.js";

const fetchVisionData = async () => {
  const {data}=await (await fetch(`${config.baseURL}/getMissionVisionData`)).json();
  return data;
}


document.addEventListener("DOMContentLoaded", async () => {

  const visionData= await fetchVisionData();

  const missionCard = document.querySelector("#mission");
   missionCard.innerHTML = visionData?.mission?.mission;

  const visionCard = document.querySelector("#vision");
  visionCard.innerHTML = visionData?.mission?.vision;

  const coreValuesCard = document.querySelector("#coreValues");
  coreValuesCard.innerHTML = visionData?.mission?.core_values;
})