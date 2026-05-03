
let selectElem = document.querySelector('select');
let logo = document.querySelector('img');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;

    if (current == 'dark') {
        // dark grey theme
        document.body.className = 'dark-gray';
        logo.src = "https://wddbyui.github.io/wdd131/images/byui-logo-blue.webp"; //my light logo byu
    } else {
        // light grey theme
        document.body.className = 'light-gray';
        logo.src = "https://wddbyui.github.io/wdd131/images/byui-logo-white.png"; //my light logo byu
    }
}           
                    