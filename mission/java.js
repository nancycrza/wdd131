let selectElem = document.querySelector('#theme-selector');
let logo = document.querySelector('.logo img');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
let current = selectElem.value;

if (current == 'dark') {
// dark grey theme
document.body.classList.add('dark');
document.body.classList.remove('light');
logo.src = "https://wddbyui.github.io/wdd131/images/byui-logo-white.png";
} else if (current == 'light') {
// light theme
document.body.classList.add('light');
document.body.classList.remove('dark');
logo.src = "https://wddbyui.github.io/wdd131/images/byui-logo-blue.png";
} else {
// default / "Choose Mode"
document.body.classList.remove('dark', 'light');
logo.src = "https://wddbyui.github.io/wdd131/images/byui-logo-blue.png";
}
}