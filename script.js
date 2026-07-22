document.addEventListener('DOMContentLoaded', () => {
  // 1. FAQ Accordion Toggle
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    questionBtn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close all active items
      faqItems.forEach(otherItem => {
        otherItem.classList.remove('active');
      });

      // If it wasn't active before, open it
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });

  // 2. Mobile Sticky Buy Bar Visibility on Scroll
  const heroSection = document.querySelector('#hero');
  const stickyBar = document.querySelector('#sticky-bar');

  if (heroSection && stickyBar) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        // When hero is NOT intersecting (scrolled past), show sticky bar
        if (!entry.isIntersecting) {
          stickyBar.classList.add('visible');
        } else {
          stickyBar.classList.remove('visible');
        }
      });
    }, {
      threshold: 0.15
    });

    observer.observe(heroSection);
  }

  // 3. Modal Checkout Placeholder Trigger
  const buyButtons = document.querySelectorAll('.trigger-buy');
  const modalOverlay = document.querySelector('#checkout-modal');
  const modalClose = document.querySelector('#modal-close');

  buyButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (modalOverlay) {
        modalOverlay.classList.add('active');
      }
    });
  });

  if (modalClose && modalOverlay) {
    modalClose.addEventListener('click', () => {
      modalOverlay.classList.remove('active');
    });

    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        modalOverlay.classList.remove('active');
      }
    });
  }

  // 4. Smooth Anchor Scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId && targetId !== '#' && targetId !== '#checkout-modal') {
        e.preventDefault();
        const targetEl = document.querySelector(targetId);
        if (targetEl) {
          targetEl.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });
});
