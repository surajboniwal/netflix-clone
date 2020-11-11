const API_KEY = '046eda5ac34bea098677b2ee06b4c532'

const requests = {
    fetchTrending: `/trending/movie/week?api_key=${API_KEY}`,
    fetchNowPlaying: `/movie/now_playing?api_key=${API_KEY}`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}`,
    fetchPopular: `/movie/popular?api_key=${API_KEY}`,
    fetchNetflix: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchAction: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
}

export default requests