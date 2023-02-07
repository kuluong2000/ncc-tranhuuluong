const bars = document.querySelector('.sub-menu');
const sidebar = document.querySelector('.sidebar');
bars.addEventListener('click', () => {
  bars.classList.toggle('active');
  sidebar.classList.toggle('active');
  if (sidebar.className.includes('active')) {
    document.body.style = 'position:fixed';
  } else {
    document.body.style = 'position:unset';
  }
});
