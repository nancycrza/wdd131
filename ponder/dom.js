const title = document.querySelector('h1');

console.log(title);

title.textContent = 'Web Page Components';

let topics = document.querySelector('#topics');

topics.style.color = 'green';

let list = document.querySelector('.list');

list.style.border = '3px solid black';

let para = document.querySelector('p');

//para.style.backgroundColor = 'lightblue'; this is alone withour the last command on css
//but if i go to css and add 
//.background-color: black;
// color: white; 
// then add here on js the command "para.classList.add('background'); 
// it will do the same as the command on top notes ( I did)

para.classList.add('background'); 

//document.querySelector('body').classList.add('background');

const image = document.querySelector('img');
image.setAttribute('src', 'images/gh.png');




let selectElem = document.getElementById('webdevlist');
selectElem.addEventListener('change', function(){
    let codeValue = selectElem.value;
    console.log(codeValue);
    document.getElementById(codeValue).style.color = 'hotpink';
})

                