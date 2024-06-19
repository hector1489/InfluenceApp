document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('.nav-toggle');
  const mainNavigation = document.querySelector('.main-navigation');

  navToggle.addEventListener('click', () => {
    mainNavigation.classList.toggle('active');
  });

  const transbankButton = document.querySelector('.transbank');

  transbankButton.addEventListener('click', () => {
    // Transbank
    window.location.href = 'confirm.html';
  });

});

function goBack() {
  window.history.back();
}
