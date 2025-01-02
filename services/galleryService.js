import { config } from "../js/config";

const fetchGalleryData = async () => {
  const data= (await fetch(`${config.baseURL}/getGallery`)).json();
  return data;
}