document.addEventListener('DOMContentLoaded', () => {
  let selectElem = document.querySelector('#theme-selector');
  let logo = document.querySelector('.logo img');

  selectElem.addEventListener('change', changeTheme);

  function changeTheme() {
    let current = selectElem.value;

    if (current === 'dark') {
      document.body.classList.add('dark');
      document.body.classList.remove('light');
      logo.src = "https://wdwdui.github.io/wdd131/images/byui-logo-white.png";
    } else if (current === 'light') {
      document.body.classList.add('light');
      document.body.classList.remove('dark');
      logo.src = "https://wddbyui.github.io/wdd131/images/byui-logo-blue.webp";
    } else {
      document.body.classList.remove('dark', 'light');
      logo.src = "https://wddbyui.github.io/wdd131/images/byui-logo-blue.webp";
    }
  }
});