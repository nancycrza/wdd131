
let selectElem = document.querySelector('select');
let logo = document.querySelector('img');

let selectElem = document.querySelector('#theme-selector');


function changeTheme() {
    let current = selectElem.value;

    if (current == 'dark') {
        // dark grey theme
        document.body.className = 'dark';
        logo.src = "https://wddbyui.github.io/wdd131/images/byui-logo-blue.webp"; //my light logo byu
    } else {
        // light grey theme
        document.body.className = 'light';
        logo.src = "https://wddbyui.github.io/wdd131/images/byui-logo-white.png"; //my light logo byu
    }
}           
                    