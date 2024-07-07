import { redirect } from "react-router-dom"
import ROUTES from "../../../constants/Routes"
import { getStorage } from "../../../utilities/storage"

export const UnAuthGuard = () => {
    const token = getStorage('auth_config') as any
    if (token) return redirect(ROUTES.MOVIE_LIST)

    return token
}


