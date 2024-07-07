import { RouteObject, createBrowserRouter } from "react-router-dom";
import NotFound from "../pages/NotFound";
import AuthRoutes from "./AuthRoutes";
import MoviesRoutes from "./MoviesRoutes";

export const Routes: RouteObject[] = [
    ...AuthRoutes,
    ...MoviesRoutes,
    {
        path: '*',
        element: <NotFound />,
        errorElement: <NotFound/>,
    }
]

const Router = createBrowserRouter(Routes);

export default Router;
