
let selectElem = document.querySelector('select');
let logo = document.querySelector('img');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        // dark grey theme
        document.body.style.backgroundColor = "#333333";
        document.body.style.color = "white";
        logo.src = "https://wddbyui.github.io/wdd131/images/byui-logo-blue.webp"; //my light logo byu
    } else {
        // light grey theme
        document.body.style.backgroundColor = "#d3d3d3";
        document.body.style.color = "black";
        logo.src = "https://wddbyui.github.io/wdd131/images/byui-logo-white.png"; //my light logo byu
    }
}           
                    