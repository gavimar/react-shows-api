const ENDPOINT = `http://api.tvmaze.com/search/shows?q=girls`;

// const ENDPOINT = `http://api.tvmaze.com/shows`;



const fetchShows = () => fetch(ENDPOINT).then(response => response.json());

export { fetchShows };