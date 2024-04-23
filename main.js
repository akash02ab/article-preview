const profile = document.querySelector('.profile');
const about = document.querySelector('.about');
const social = document.querySelector('.social');
const share = document.getElementById('share-btn');

share.addEventListener('click', () => {
  const currWidth = window.screen.width;

  if (currWidth < 920) {
    profile.classList.toggle('dark');
    about.classList.toggle('show');
  }

  social.classList.toggle('show');
  share.classList.toggle('active');
});