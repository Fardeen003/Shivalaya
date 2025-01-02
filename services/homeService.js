import { config } from '../js/config';

const fetchHomeData = async () => {
  try {
    const response = await fetch(`${config.baseURL}/getHomepageData`);
    const data = await response.json();
    console.log('fetchHomeData:', data);
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

fetchHomeData();
