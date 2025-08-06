const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close');
const leftpicture = document.querySelector('.leftpic');
const rightpicture = document.querySelector('.rightpic');

document.querySelectorAll('.gallery img').forEach(img => {
  img.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    lightboxImg.src = img.src;
  });
});

closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

// leftpicture.addEventListener('click', () => {
  
// });

// rightpicture.addEventListener('click', () => {
  
// });

document.addEventListener('keydown', (e) => {
  if (e.key === "Escape") {
    lightbox.style.display = 'none';
  }
});
