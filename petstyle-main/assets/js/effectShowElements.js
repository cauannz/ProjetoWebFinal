const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.intersectionRatio >= 1) {
      entry.target.classList.add('init-hidden-off');
    }
  });
}, {
  threshold: 1
});

const elementsHidden = document.querySelectorAll('.init-hidden');

elementsHidden.forEach(element => {
  observer.observe(element);
});
