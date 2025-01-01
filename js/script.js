const drawer = document.getElementById('drawer');
const overlay = document.getElementById('overlay');
const openDrawerBtn = document.getElementById('openDrawerBtn');
const closeDrawerBtn = document.getElementById('closeDrawerBtn');

// Open Drawer
openDrawerBtn.addEventListener('click', () => {
  drawer.classList.remove('-translate-x-full');
  overlay.classList.remove('hidden');
});

// Close Drawer
closeDrawerBtn.addEventListener('click', () => {
  drawer.classList.add('-translate-x-full');
  overlay.classList.add('hidden');
});

overlay.addEventListener('click', () => {
  drawer.classList.add('-translate-x-full');
  overlay.classList.add('hidden');
});

// const toggleDropdown =(element)=>{
//     const dropdown= element.querySelector('.dropdown');
//     const icon= element.querySelector('.icon');
//     dropdown.classList.toggle('hidden');
//     icon.classList.toggle('rotate-180');  
//   }

  function toggleDropdown(element) {
    // Prevent closing when clicking inside child elements
    element.addEventListener('click', function (event) {
      event.stopPropagation(); // Stops the event from propagating to parent elements
    });
  
    // Toggle the dropdown
    const dropdown = element.querySelector('.dropdown');
    const icon = element.querySelector('.icon');
    icon.classList.toggle('rotate-180');
    if (dropdown) {
      dropdown.classList.toggle('hidden');
    }
  }
