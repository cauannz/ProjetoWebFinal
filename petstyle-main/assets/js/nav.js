const btnMenu = document.querySelector('.btn-menu');
const navList = document.getElementById('list-nav');
const iconBtnMenu = document.getElementById('icon-btn-menu')
const iconBtnMenu2 = document.getElementById('icon-btn-menu2')

btnMenu.addEventListener('click', () => {
  if (!navList.classList.contains('active')) {
    iconBtnMenu.src = '/assets/svgs/osso-color.svg';
    iconBtnMenu2.src = '/assets/svgs/osso-color.svg';
  } else {
    iconBtnMenu.src = '/assets/svgs/osso-uncolor.svg';
    iconBtnMenu2.src = '/assets/svgs/osso-uncolor.svg';
  }


  btnMenu.classList.toggle('active');
  navList.classList.toggle('active');
});
