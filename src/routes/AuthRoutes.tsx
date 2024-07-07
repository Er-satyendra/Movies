import ROUTES from "../constants/Routes";
import useLazyLoadRoute from "../hooks/UseLazyLoadRoute";
import { UnAuthGuard } from "./Guards/UnAuth";

const Login = () => useLazyLoadRoute(() => import('../pages/Auth/Login'));
const Registration = () => useLazyLoadRoute(() => import('../pages/Auth/Registration'));
const NotFound = () => useLazyLoadRoute(() => import("../pages/NotFound"));

export const AuthRoutes = [
    {
        path: ROUTES.LOGIN,
        element: <Login />,
        loader:UnAuthGuard,
        errorElement: <NotFound/>,
    },
    {
        path: ROUTES.REGISTRATION,
        element: <Registration />,
        errorElement: <NotFound/>,
        loader:UnAuthGuard,
    }
]

export default AuthRoutes