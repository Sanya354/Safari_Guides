document.addEventListener('DOMContentLoaded', function() {
  // Mobile Menu
  const menuToggle = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }

  // Guide Filtering
  function filterGuides(speciality) {
    const cards = document.querySelectorAll('.guide-card');
    cards.forEach(card => {
      card.style.display = !speciality || card.dataset.speciality === speciality 
        ? 'block' 
        : 'none';
    });
  }

  // Star Ratings
  document.querySelectorAll('.guide-rating').forEach(ratingContainer => {
    const rating = parseInt(ratingContainer.dataset.rating);
    const starsContainer = ratingContainer.querySelector('.stars');
    
    if (!starsContainer) return;
    
    starsContainer.innerHTML = '';
    for (let i = 0; i < rating; i++) starsContainer.innerHTML += '★';
    for (let i = rating; i < 5; i++) starsContainer.innerHTML += '☆';
  });

  // FAQ Toggle
  document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
      const faqItem = button.parentElement;
      const isOpen = button.getAttribute('aria-expanded') === 'true';
      
      document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
        item.querySelector('[aria-expanded]')?.setAttribute('aria-expanded', 'false');
      });
      
      if (!isOpen) {
        faqItem.classList.add('active');
        button.setAttribute('aria-expanded', 'true');
      }
    });
  });
});