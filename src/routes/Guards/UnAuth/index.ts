import { redirect } from "react-router-dom"
import ROUTES from "../../../constants/Routes"
import { getStorage } from "../../../utilities/storage"

export const UnAuthGuard = () => {
    const token = getStorage<string>('auth_config')
    if (token) return redirect(ROUTES.MOVIE_LIST)

    return token
}


