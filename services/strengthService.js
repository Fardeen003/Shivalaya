import { config } from "../js/config.js";

const fetchStrengthData = async () => {
  const {data} = await (await fetch(`${config.baseURL}/getStrength`)).json();
  return data;
}

document.addEventListener("DOMContentLoaded", async () => {
  const {strength:{section1,section2,section3,section4},header,footer} = await fetchStrengthData();

  // section1
  const strengthSection1 = document.querySelector("#strengthSection1");
  strengthSection1.innerHTML = `
      <div class="h-auto">
        <img src=${config?.assetPath+section1?.image} class="md:float-right m-8 w-[690px] h-[480px] object-contain rounded-md"/>
        <h6>OUR STRENGTH<img src="../public/icons/underline.svg"/></h6>
        <h2 class="text-[24px] md:text-[28px] lg:text-[36px] font-normal my-2 mb-4">${section1?.title?.split(" ").slice(0,2).join(" ")} <span class="font-bold">${section1?.title?.split(" ").slice(2).join(" ")}</span> </h2>
        <p style="text-align:justify" class=" mb-2 md:mb-4 md:text-start text-justify">${section1?.description}</p>
        </div>
  `;

  // section2
  const strengthSection2 = document.querySelector("#strengthSection2");
  strengthSection2.innerHTML = `
     <div class="bg-light p-3 md:p-14">
    <div class='text-center'>
        <h2 class='text-[24px] md:text-[28px] lg:text-[36px] font-normal my-4'>${section2?.title?.split(" ").slice(0,2).join(" ")} <span class="font-bold">${section2?.title?.split(" ").slice(2).join(" ")}</span> </h2>
        <p class='my-3 md:my-5 md:w-4/5 mx-auto text-justify md:text-center'>${section2?.description}</p>
    </div>

    <div class="grid grid-cols-2 lg:grid-cols-4 justify-between items-center gap-x-5 gap-y-8 text-[14px] my-10">
       ${section2?.items?.map((item)=>{
        return `
         <div>
            <div class="flex flex-col md:flex-row items-center mb-1 md:mb-5">
                <img src=${config?.assetPath+item?.image} width="56" height="56" class="size-[56px] mr-4 mb-2 rounded shadow-md"/>
                <span class="text-[18px] md:text-[20px] font-medium">${item?.title} :</span>
            </div>
            <p class="text-[13px] md:text-[14px] text-justify md:text-start">${item?.description}</p>
         </div>
        `
       }).join("")
      }

    </div>
    </div>

  `

  // section3  
  const strentghSection3 = document.querySelector("#strengthSection3");
  strentghSection3.innerHTML = `
    <div class='text-center md:mt-20'>
        <h2 class='text-[24px] md:text-[28px] lg:text-[36px] font-normal my-4'>LOREM IPSUM <span class="font-bold">SIMPLY DUMMY</span> </h2>
        <p class="my-5 md:w-4/5 mx-auto text-justify md:text-start">Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500S, When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book. Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500S, When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book. </p>
        <p class='my-5 md:w-4/5 mx-auto text-justify md:text-start'>Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500S, When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book.</p>
    </div>
   
  `

  





})