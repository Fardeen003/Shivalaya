import { config } from "../js/config.js";

const fetchAboutData = async () => {
  try {
    const {data} = await (await fetch(`${config.baseURL}/getAboutUsData`)).json();
       return data;
    
  } catch (error) {
    console.error("Error occured while fetching about data", error);
  }

}



document.addEventListener("DOMContentLoaded", async function () {
  const aboutData = await fetchAboutData();
  const aboutUs = document.getElementById("aboutUs");

  aboutUs.innerHTML = `
    <div>
        <div>
        <img src=${config?.assetPath+aboutData?.about_us?.image} width="673" height="400" class="w-[673px] h-[400px] object-contain lg:float-right"/>
        <h6>ABOUT US<img src="../public/icons/underline.svg"/></h6>
        <h2  class="text-[24px] md:text-[28px] lg:text-[36px] font-medium my-4">${aboutData?.about_us?.title.split(" ")[0]} <span class="font-bold">${aboutData?.about_us?.title?.split(" ")[1]}</span> ${aboutData?.about_us?.title?.split(" ").slice(2).join(" ")}</h2>
        <p style="text-align:justify;" class=" text-[13px] md:text-[14px] lg:text-[16px] mb-1 md:mb-4 text-justify md:text-start">${aboutData?.about_us?.description}</p>
        </div>
        <div style="width:275px;" class="w-[275px]">
        <a href="${config?.assetPath+aboutData?.about_us?.brochure_link}" download class="btn !text-dark !bg-white border ">
            <img src="../../public/icons/Icon material-round-download.svg" class="mr-2 fill-dark"/>
            DOWNLOAD BROUCHER 
          </a>
        </div>
    </div>
  `;

  const ourStory = document.getElementById("ourStory");
  ourStory.innerHTML = `
     <div class="my-5 md:my-20">
        <div class="lg:float-right relative mx-28 my-16">
            <img src=${config?.assetPath+aboutData?.our_story?.image} class="w-[604px] h-[348px] shadow-lg rounded-xl object-contain"/>
            <img src=${config?.assetPath+aboutData?.our_story?.logo} class="md:absolute -bottom-10 mt-2 w-full md:h-[186px] md:w-[281px] right-0 lg:-left-20 rounded-xl shadow-lg object-contain"/>
        </div>
        <div>
        <div class="my-12 ">
            <h6 class="mb-1">OUR STORY<img src="../public/icons/underline.svg"/></h6>
            <h2 class="text-[24px] md:text-[28px] lg:text-[36px] my-2">${aboutData?.our_story?.title?.split(" ")[0]} <span class="font-bold">${aboutData?.our_story?.title?.split(" ").slice(1).join(" ")}?</span></h2>
            <p style="text-align:justify;" class="mb-2 md:mb-3 text-justify md:text-start">${aboutData?.our_story?.description}</p>
        </div>
        </div>
    </div>
  `;

  

})