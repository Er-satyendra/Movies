export const HTTP_METHODS: Record<string, string> = Object.freeze({
    GET: "get",
    POST: "post",
    PUT: "put",
    PATCH: "patch",
    DELETE: "delete",
});

export const API_URLS: Record<string, string> = Object.freeze({
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    GET_ALL_MOVIES: '/movies/all',
    GET_MOVIE_BY_ID: '/movies/getMovieById/',
    SAVE_MOVIE: '/movies/',
    UPLOAD: '/upload/'
})
