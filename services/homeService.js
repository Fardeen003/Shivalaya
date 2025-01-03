import { config } from '../js/config.js';

const fetchHomeData = async () => {
  try {
    const response = await fetch(`${config.baseURL}/getHomepageData`);
    const {data} = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
 
document.addEventListener('DOMContentLoaded', async () => {
  const homeData = await fetchHomeData();
  console.log("homdata ---->",homeData);

  //  header
  const logo = document.querySelector('.logo');
     logo.src =  `${config?.assetPath}${homeData?.header?.logo}`;
  const phone = document.getElementById('phone');
      phone.textContent = homeData?.header?.phone;
      phone.href = `tel:${homeData?.header?.phone}`;
  const email = document.getElementById('email');
      email.textContent = homeData?.header?.email;
      email.href = `mailto:${homeData?.header?.email}`;
  const broucher = document.getElementById('broucher');
        broucher.href =config?.assetPath + homeData?.header?.brochure_link;    

//  home banner
const bannerContainer = document.querySelector('#homeBanner');
    homeData?.banner?.forEach((banner,idx)=>{
      bannerContainer.innerHTML += `
      <div class="swiper-slide "> 
        <div class="text-center relative ">
          <img src=${config?.assetPath + banner?.image} class="h-[350px] md:h-full w-full object-cover" alt="Slide ${idx}" />
          <div class="absolute h-full w-full flex items-center top-0 left-0 text-start px-3 md:px-14">
            <div class="md:w-1/2">  
            <h4 class="text-white text-[25px] lg:text-[30px]">${banner?.title?.split(" ").slice(0,2).join(" ")}</h4>
            <h3 class=" text-[30px] md:text-[40px] lg:text-[60px] text-primary font-bold">${banner?.title?.split(" ").slice(2,3).join(" ")}</h3>
            <h4 class="text-white md:text-[22px] lg:text-[30px] mb-5">${banner?.title?.split(" ").slice(3).join(" ")}</h4>
            <p class=" text-white mb-7 text-[12px] lg:text-[16px]">${banner?.subtitle}</p>
              <button class="btn">Contact</button>
           </div>  
          </div>
        </div>
      </div>`
    })

  // About Us  
  const aboutUs = document.getElementById('homeAboutUs');
  aboutUs.innerHTML += `
     <div class=" my-3 md:my-12 grid lg:grid-cols-2 md:gap-16 lg:gap-28 p-3 md:px-14 justify-between items-center">
      <div>
        <h6 class="text-primary font-medium">ABOUT US <img src="./public/icons/line.svg"/></h6>
        <h3 class="text-[24px] md:text-[28px] lg:text-[36px] my-2 md:my-5">${homeData?.aboutUs?.title?.split(" ")[0]} <span class="bg-primary text-white leading-[36px]">${homeData?.aboutUs?.title?.split(" ")[1]}</span> ${homeData?.aboutUs?.title?.split(" ").slice(2).join(" ")}</h3>
        <p class=" mb-4 lg:mb-7 text-[13px] text-justify md:text-start md:text-[14px] lg:text-[16px]">${homeData?.aboutUs?.description}</p>
        <div class="flex mb-4">
          <button class="btn">READ MORE</button>
          <a download href=${config?.assetPath+ homeData?.aboutUs?.brochure_link} class="btn !text-primary !bg-white border !w-auto ml-5">
            <img src="../../public/icons/Icon material-round-download.svg" class="mr-2"/>
            DOWNLOAD BROUCHER 
          </a>
        </div>
      </div>
      <div class="relative">
        <img src=${config?.assetPath+homeData?.aboutUs?.image} width="673" height="400" class=" w-full h-[400px] object-cover"/>
        <div class="size-[108px] shadow-custom flex place-items-center justify-center bg-white absolute -bottom-[50px] -left-[20px]">
          <img src=${config?.assetPath+homeData?.aboutUs?.logo} width="56" height="70" class="w-[56px] h-[70px] object-contain"/>
        </div>
      </div>
     </div>
    </div>
    `;


// Our Projects
const projects = document.querySelector('#homeProjects');

if (projects && homeData?.latest_project) {
  const latestProject = homeData.latest_project;
  const titleParts = latestProject.title?.split(" ") || [];
  const titleMain = titleParts.slice(0, -1).join(" ");
  const titleHighlight = titleParts.slice(-1).join(" ");

  projects.innerHTML = `
    <div class="px-3 md:px-14 my-3 md:my-14 lg:my-20">
      <!-- Header Section -->
      <div class="text-center">
        <h6 class="text-primary font-medium flex flex-col items-center justify-center">
          OUR PRODUCTS 
          <img src="./public/icons/line.svg" alt="line"/>
        </h6>
        <h3 class="text-[24px] md:text-[28px] lg:text-[36px] my-2 md:my-3 lg:my-5">
          ${titleMain}
          <span class="text-primary font-bold">
            ${titleHighlight}
          </span>
        </h3>
        <p class="lg:w-[80%] mx-auto text-[13px] text-justify md:text-center md:text-[14px] lg:text-[16px]">
          ${latestProject.description || ''}
        </p>
      </div>

      <!-- Swiper Container -->
      <div class="my-10 swiper homeProjects">
        <!-- Swiper Wrapper -->
        <div class="swiper-wrapper">
          ${
            latestProject.projects?.map((project) => {
              const imageUrl = `${config?.assetPath}${project?.thumbnail_image}`;
              const projectName = project?.project_name || 'Project Name';
              const projectDesc = project?.description || '';
              const projectLink = project?.link || '#';

              return `
                <div class="swiper-slide h-[400px] w-[444px] rounded-lg shadow-md">
                  <img src="${imageUrl}" 
                       class="w-full h-1/2 object-cover rounded-[inherit]" 
                       alt="${projectName}"/>
                  <div class="p-4 flex flex-col justify-between h-1/2">
                  <div>
                    <h6 class="text-[24px] text-primary mb-3">${projectName}</h6>
                    <p style="word-wrap:break-word;" class="text-[14px] mb-4 line-clamp-2">${projectDesc}</p>
                  </div>
                 
                    <a href="${projectLink}" class="font-medium text-primary">READ MORE</a>
                  </div>
                </div>
              `;
            }).join("") || '<div>No projects available.</div>'
          }
        </div>
        <!-- Swiper Pagination -->
        <div class="swiper-pagination"></div>
      </div>
    </div>
  `;
} else {
  console.error('Projects element or data is missing');
}

  
// Our Services
const services = document.querySelector('#homeServices');

services.innerHTML = `
  <div class="p-3 md:px-14">
    <div class="text-center">
      <h6 class="text-primary font-medium flex flex-col justify-center items-center">
        OUR SERVICES
        <img src="./public/icons/underline.svg" alt="underline" />
      </h6>
      <h3 class="text-[24px] md:text-[28px] lg:text-[36px] my-1 md:my-3 lg:my-5">
        ${homeData?.our_services?.title?.split(" ")[0]} 
        <span class="text-primary font-bold">
          ${homeData?.our_services?.title?.split(" ").slice(1).join(" ")}
        </span>
      </h3>
      <p class="lg:w-[80%] text-[13px] md:text-[14px] lg:text-[16px] text-justify md:text-center mx-auto">
        ${homeData?.our_services?.description}
      </p>
    </div>

    <!-- Tabs -->
    <div class="lg:flex justify-between md:gap-20 my-10 tab_container">
      
      <!-- Tab Headers -->
      <div class="grid lg:block grid-cols-2 gap-3 md:gap-5 mb-4">
        ${homeData?.our_services?.services?.map((service, idx) => {
          return `
            <div onclick="handleTab(${idx})" class="tab_tile ${idx===0 && "active"} group" id="tab-${idx}">
              <img src="${config?.assetPath+service?.logo}" alt="${service?.title}" height="73" width="116" class="h-[73px] w-[116px] object-contain border-2 border-white md:mr-5" />
              <h5 class="tab_text">${service?.title}</h5>
            </div>
          `;
        }).join('')}
      </div>

      <!-- Tab Content -->
      <div id="tab-content">
        ${homeData?.our_services?.services?.map((service, idx) => {
          return `
            <div class="relative ${idx !== 0 && 'hidden'}" id="content-${idx}">
              <img src="${config?.assetPath+service?.image}" alt="${service?.title}" height="444" width="779" class="h-full md:h-[444px] md:w-[779px] w-full object-cover" />
              <div class="bg-primary md:h-[176px] md:w-[444px] text-white md:absolute bottom-10 left-10 p-5">
                <h6 class="text-[20px] md:text-[24px] mb-3">${service?.title}</h6>
                <p class="text-[10px] md:text-[14px] mb-3 md:mb-5 line-clamp-2">${service?.description}</p>
                <a href="#" class="text-[14px] md:text-[16px]">READ MORE</a>
              </div>
            </div>
          `;
        }).join('')}
      </div>

    </div>
  </div>
`;


const homeStory = document.querySelector('#homeStory');
 homeStory.innerHTML = `
        <div class="grid lg:grid-cols-2 px-3 md:px-14 lg:p-14 justify-between items-center lg:gap-28 ">
        <div>
          <h5 class="text-primary grid justify-center md:justify-start items-center md:items-start">OUR STORY<img src="./public/icons/underline.svg"/></h5>
          <h3 class="text-center md:text-start  text-[24px] md:text-[28px] lg:text-[36px] my-1 md:mt-3 md:mb-5">${homeData?.our_story?.title?.split(" ")[0]} <span class="text-primary font-bold"> ${homeData?.our_story?.title?.split(" ")?.slice(1)?.join(" ")}?</span></h3>
          <p class="md:mb-6 mb-3 text-[13px] text-justify md:text-start md:text-[14px] lg:text-[16px]">${homeData?.our_story?.description}</p>
        <button class="btn">READ MORE</button>
        </div>
        <div class="relative">
          <img src="${config?.assetPath+homeData?.our_story?.image}" height="348" width="690" class="h-[348px] w-[690px] object-cover"/>
          <div class="shadow-xl  p-4 rounded-2xl absolute bottom-0 bg-white flex justify-center items-center">
            <img src="${config?.assetPath+homeData?.our_story?.logo}" height="58" width="225" class="object-contain w-[100px] md:h-[58px] md:w-[225px] "/>
          </div>
        </div>
       </div>
 ` ;

//  Testimonials
const testimonials = document.querySelector('#homeTestimonials');
testimonials.innerHTML = `
      <div style="background-image: url('../../public/home/testimonial-bg.png');" class="text-center mt-10 md:mt-20 py-10 p-3">
        <h6 class="text-primary font-medium mb-2 flex flex-col justify-center items-center">TESTIMONIALS<img src="./public/icons/underline.svg"/></h6>
        <h3 class="text-[24px] md:text-[28px] lg:text-[36px] my-2 md:mb-4">${homeData?.testimonials?.title?.split(" ")[0]} <span class="text-primary font-bold">${homeData?.testimonials?.title?.split(" ")?.slice(1)?.join(" ")}!</span></h3>
        <p class="lg:w-[75%] text-[13px] text-justify md:text-center md:text-[14px] lg:text-[16px] mx-auto">${homeData?.testimonials?.description}</p>
  
      <div class="flex justify-center items-center gap-7 pt-16 md:py-24 overflow-hidden swiper homeTestimonial_swiper">
       
        <div class="swiper-wrapper">

        ${
          homeData?.testimonials?.testimonials?.map((testimonial,idx)=>{
            return `
        <div class="bg-white shadow-lg rounded-md md:h-[252px] w-[815px] relative swiper-slide p-3" >
          <img src="${config?.assetPath+testimonial?.avatar}" class="rounded-full w-[80px] h-[80px] md:w-[121px] md:h-[121px] absolute left-[40%] -top-[40px] md:left-[43%] md:-top-[60px]" width="121" height="121" alt="profile-img"/>
        <div class=" mt-[35px] md:mt-[70px] text-black">
          <span class="text-[18px] md:text-[20px] mb-2">${testimonial?.title}</span>
          <p class="text-[12px] md:text-[14px] text-justify md:text-center line-clamp-2">${testimonial?.description}.</p>
          <span class="text-[18px] md:text-[20px]">${testimonial?.location}</span>
        </div>
        </div>  
            `
          }).join('')
        }
  
  
     
      </div>

  
      </div>
      </div>
      `


      // our empanelment/
      const empanelment = document.querySelector('#homeEmpanelment');
      empanelment.innerHTML = `
            <div style="background-image: url('../../public/home/partners.png');" class="text-center mb-5 md:mb-20 p-3 py-5 md:py-8 lg:py-20">
        <h6 class="text-white font-medium  md:mb-2">OUR EMPANELMENT</h6>
        <h3 class="text-[24px] md:text-[28px] lg:text-[36px] mb-2 md:mb-4 text-white">${homeData?.empanelment?.title?.split(" ")[0]} <span class="font-semibold">${homeData?.empanelment?.title?.split(" ").slice(1).join(" ")}</span></h3>
        <p class="lg:w-[75%] mx-auto text-white text-[13px] text-justify md:text-center md:text-[14px] lg:text-[16px]">${homeData?.empanelment?.description}</p>
  
       <div class=" px-14 my-8 gap-3 swiper slider_pagination mySwiper">
        <div class="swiper-wrapper">

      <div class="swiper-slide">
        <div class="grid grid-cols-2 md:grid-cols-6 gap-2 md:gap-5">
          <img src="https://www.dummyimage.com/220x95/000/fff" class="rounded-lg"/>
          <img src="https://www.dummyimage.com/220x95/000/fff" class="rounded-lg"/>
          <img src="https://www.dummyimage.com/220x95/000/fff" class="rounded-lg"/>
          <img src="https://www.dummyimage.com/220x95/000/fff" class="rounded-lg"/>
          <img src="https://www.dummyimage.com/220x95/000/fff" class="rounded-lg"/>
          <img src="https://www.dummyimage.com/220x95/000/fff" class="rounded-lg"/>
          <img src="https://www.dummyimage.com/220x95/000/fff" class="rounded-lg"/>
          <img src="https://www.dummyimage.com/220x95/000/fff" class="rounded-lg"/>
          <img src="https://www.dummyimage.com/220x95/000/fff" class="rounded-lg"/>
          <img src="https://www.dummyimage.com/220x95/000/fff" class="rounded-lg"/>
          <img src="https://www.dummyimage.com/220x95/000/fff" class="rounded-lg"/>
          <img src="https://www.dummyimage.com/220x95/000/fff" class="rounded-lg"/>
        </div>
      </div>

      <div class="swiper-pagination"></div>

  
       </div>
      </div>
      
      `





})



