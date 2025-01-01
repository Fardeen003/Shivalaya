const toggleSliderModal = ()=>{
    const modal = document.querySelector('.slider_modal');
    modal.classList.contains('hidden') ? modal.classList.remove('hidden') : modal.classList.add('hidden');
}

const toggleCareerFormModal = ()=>{
  const modal = document.querySelector('.career_form_modal');
  modal.classList.contains('hidden') ? modal.classList.remove('hidden') : modal.classList.add('hidden');
}

// Play and Pause functionality
const playButton = document.querySelector('.play-btn');
let isPlaying = true;

playButton.addEventListener('click', () => {
  if (isPlaying) {
    modalSlider.autoplay.stop(); // Pause autoplay
    playButton.innerHTML = `
      <svg class="w-[40px] h-[40px]" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 6h3v12H7V6zm7 0h3v12h-3V6z"></path>
      </svg>`; // Pause icon
  } else {
    modalSlider.autoplay.start(); // Start autoplay
    playButton.innerHTML = `
      <svg class="w-[40px] h-[40px]" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
        <path d="M24,2A22,22,0,1,0,46,24,21.9,21.9,0,0,0,24,2ZM34.6,24.7,18.1,34.8c-.6.4-1.1.1-1.1-.6V13.8c0-.7.5-1,1.1-.6L34.6,23.3A.8.8,0,0,1,34.6,24.7Z"></path>
      </svg>`; // Play icon
  }
  isPlaying = !isPlaying; // Toggle state
});