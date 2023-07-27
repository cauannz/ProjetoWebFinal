document.addEventListener('click', (e) => {
  const el = e.target;

  if (el.classList.contains('btn-modal')) {
    const dialog = el.parentNode.querySelector('dialog');
    dialog.showModal();
  }

  if (el.classList.contains('btn-close')) {
    const dialog = el.closest('dialog');
    dialog.close();
  }
});
