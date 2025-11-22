const slideElements = document.querySelector('.slidetext1');


window.addEventListener('scroll', () => {
  slideElements.classList.add('active');
});