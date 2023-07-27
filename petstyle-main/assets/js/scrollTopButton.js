window.addEventListener('scroll', function() {
  var button = document.getElementById('scrollTopButton');
  if (window.scrollY > window.innerHeight / 2) {
    button.style.display = 'block';
  } else {
    button.style.display = 'none';
  }
});

document.getElementById('scrollTopButton').addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
