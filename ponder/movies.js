const movies = [

{
title: "Spider-Man: Into the Spider-Verse",
date: "Dec 14, 2018",
description: "Miles Morales becomes Spider-Man of his reality and crosses paths with other Spider-People from different universes.",
imgSrc: "https://wdd131.github.io/wdd131/images/spiderman.png",
imgAlt: "Spider-Man swinging through the city",
ages: "10+",
genre: "Action/Adventure",
stars: "⭐⭐⭐⭐⭐⭐"
},

{
title: "The Other Side of Heaven",
date: "December 14, 2001",
description: "A young missionary serves in Tonga during the 1950s and learns faith, sacrifice, and miracles.",
imgSrc: "https://wdd131.github.io/wdd131/images/heaven.png",
imgAlt: "Missionary in Tonga",
ages: "10+",
genre: "Drama/Religious",
stars: "⭐⭐⭐⭐⭐"
},

{
title: "Luca",
date: "June 18, 2021",
description: "Two sea monsters experience an unforgettable summer on the Italian Riviera.",
imgSrc: "https://wdd131.github.io/wdd131/images/luca.png",
imgAlt: "Luca on the beach",
ages: "6+",
genre: "Family/Fantasy",
stars: "⭐⭐⭐⭐"
},

{
title: "17 Miracles",
date: "June 3, 2011",
description: "The inspiring story of the Willie Handcart Company crossing the plains.",
imgSrc: "https://wdd131.github.io/wdd131/images/miracles.jpg",
imgAlt: "17 Miracles movie poster",
ages: "12+",
genre: "Historical/Religious",
stars: "⭐⭐⭐⭐⭐"
}

];

const movieList = document.getElementById("movie-list");

movies.forEach(movie => {

const movieSummary = `
<div class="movie-summary">

    <img src="${movie.imgSrc}" alt="${movie.imgAlt}">

    <div class="movie-info">
        <h2>${movie.title}</h2>

        <p><strong>Release Date:</strong> ${movie.date}</p>

        <p><strong>Description:</strong> ${movie.description}</p>

        <p><strong>Age Rating:</strong> ${movie.ages}</p>

        <p><strong>Genre:</strong> ${movie.genre}</p>

        <p class="rating">${movie.stars}</p>
    </div>

</div>
`;

movieList.innerHTML += movieSummary;

});