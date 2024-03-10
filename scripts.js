document.addEventListener("DOMContentLoaded", function() {
    // Array de películas con el formato {titulo, enlace}
    const movies = [
        { title: "Pelicula 1", link: "https://example.com/pelicula1" },
        { title: "Pelicula 2", link: "https://example.com/pelicula2" },
        { title: "Pelicula 3", link: "https://example.com/pelicula3" }
        // Agrega más películas según sea necesario
    ];

    const container = document.getElementById("moviesContainer");

    movies.forEach(movie => {
        const movieElement = document.createElement("div");
        movieElement.classList.add("movie");
        movieElement.innerHTML = `
            <h3>${movie.title}</h3>
            <iframe width="300" height="200" src="${movie.link}" frameborder="0" allowfullscreen></iframe>
        `;
        container.appendChild(movieElement);
    });
});
