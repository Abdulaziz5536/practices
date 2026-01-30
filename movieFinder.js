const tmdbKey = 'https://jsonplaceholder.typicode.com';
const tmdbBaseUrl = 'https://api.themoviedb.org/3';

const genresDropdown = document.getElementById('genres');
const movieButton = document.getElementById('getMovie');
const movieTitle = document.getElementById('movieTitle');
const moviePoster = document.getElementById('moviePoster');
const movieOverview = document.getElementById('movieOverview');


const getGenres = async () => {
  
  url = `${tmdbBaseUrl}/genre/movie/list?api_key=${tmdbKey}`;
  try{
    const response = await fetch(url);
    if(response=!ok){
      throw new Error('request failed!');
    }
    const data = await response.json();
    const genres = data.genres;

    populateGenres(genres);
  }catch(err){
    console.log(err);
    
  }
  
}


const populateGenres = (genres) => {
  
};


const getMoviesByGenre = async (genreId) => {

  try{
    const res = await fetch(url);
    if(res=!ok){
      throw new Error('request failed');
    }
    const data = await res.json();
    for(let i = 0;i < genreId.length;i++){
      genreId[i] = data[i].id;
    }
    

  }catch(err){
    console.log(err);
    
  }
  


};


const getRandomMovie = (movies) => {
  
};


const displayMovie = (movie) => {
  movieTitle.textContent = movie.title;
  movieOverview.textContent = movie.overview;
  moviePoster.src = `https://image.tmdb.org/t/p/w300${movie.poster_path}`;
};


movieButton.addEventListener('click', async () => {
  const selectedGenre = genresDropdown.value;
  
});


getGenres();
