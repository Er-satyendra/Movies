import ROUTES from "../constants/Routes";
import useLazyLoadRoute from "../hooks/UseLazyLoadRoute";
import { AuthGuard } from "./Guards/Auth";

const MovieList = () => useLazyLoadRoute(() => import("../pages/Movies/MovieList"));
const MovieEditor = () => useLazyLoadRoute(() => import("../pages/Movies/MovieEditor"));
const NotFound = () => useLazyLoadRoute(() => import("../pages/NotFound"));

export const MoviesRoutes = [
    {
        path: ROUTES.ROOT,
        element: <MovieList />,
        errorElement: <NotFound/>,
        loader:AuthGuard,
    },
    {
        path: ROUTES.MOVIE_LIST,
        element: <MovieList />,
        errorElement: <NotFound/>,
        loader:AuthGuard,
    },
    {
        path: `${ROUTES.MOVIE_EDITOR}/:type`,
        element: <MovieEditor />,
        errorElement: <NotFound/>,
        loader:AuthGuard,
    }
]

export default MoviesRoutes