// плавный скролл к разделу features
const learnMoreBtn = document.getElementById('learnMoreBtn');
if (learnMoreBtn) {
  learnMoreBtn.addEventListener('click', () => {
    const features = document.getElementById('features');
    if (features) features.scrollIntoView({ behavior: 'smooth' });
  });
}

// плавный скролл вверх при клике на логотип
const logoLink = document.querySelector('.logo a');
if (logoLink) {
  logoLink.addEventListener('click', (e) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// показываем popup Telegram при загрузке
window.addEventListener('load', () => {
  const popup = document.getElementById('popup');
  if (!popup) return;

  // эффект появления с задержкой
  setTimeout(() => popup.classList.add('show'), 400);

  // при клике — открыть Telegram
  popup.addEventListener('click', () => {
    window.open('https://t.me/w1xed', '_blank');
  });
});

// показываем Instagram popup
const instaPopup = document.querySelector('.instagram-popup');
if (instaPopup) {
  instaPopup.classList.add('show');
}

