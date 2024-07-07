import validator from "validator";
import ERROR_MESSAGES from "../constants/Messages";

export const validateMovieForm = (movie: MovieFormProps): MovieFormErrorProps => {
    const errors: MovieFormErrorProps = {};

    if (validator.isEmpty(movie.movieName)) {
        errors.movieName = ERROR_MESSAGES.MOVIE_NAME_REQUIRED;
    }
    if (validator.isEmpty(movie.publishYear)) {
        errors.publishYear = ERROR_MESSAGES.PUBLISHED_YEAR_REQUIRED;
    }
    if (!(movie.file) && validator.isEmpty(movie.image)) {
        errors.file = ERROR_MESSAGES.FILE_REQUIRED;
    }
    return errors;
};
