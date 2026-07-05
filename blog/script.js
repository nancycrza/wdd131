const articles = [

{
id:1,
title:"Septimus Heap Book One: Magyk",
date:"July 5, 2022",
description:"If you enjoy stories about seventh sons of seventh sons and magyk, this is the book for you.",
imgSrc:"https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg",
imgAlt:"Book cover for Septimus Heap Book One Magyk",
ages:"10-14",
genre:"Fantasy",
stars:"★★★★★"
},

{
id:2,
title:"Magnus Chase Book One: Sword of Summer",
date:"December 12, 2021",
description:"The anticipated new novel by Rick Riordan featuring Norse mythology and the adventures of Magnus Chase.",
imgSrc:"https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300",
imgAlt:"Book cover for Magnus Chase",
ages:"12-16",
genre:"Fantasy",
stars:"★★★★"
},

{
id:3,
title:"Belgariad Book One: Pawn of Prophecy",
date:"Feb 12, 2022",
description:"A fierce dispute among the Gods and the theft of a powerful Orb leaves young Garion on an unforgettable journey.",
imgSrc:"https://images-na.ssl-images-amazon.com/images/I/41ZxXA+nInL.jpg",
imgAlt:"Book cover for Pawn of Prophecy",
ages:"12-16",
genre:"Fantasy",
stars:"★★★★★"
}

];

const articleList = document.getElementById("article-list");

articles.forEach(article => {

const html = `

<section class="blog-grid">

    <aside class="book-details">
        <p>${article.date}</p>
        <p>${article.ages}</p>
        <p>${article.genre}</p>
        <p aria-label="${article.stars}">${article.stars}</p>
    </aside>

    <article class="book-review">

        <h2>${article.title}</h2>

        <img
            src="${article.imgSrc}"
            alt="${article.imgAlt}"
        >

        <p>
            ${article.description}
        </p>

    </article>

</section>

`;

articleList.innerHTML += html;

});