import { redirect } from "react-router-dom"
import ROUTES from "../../../constants/Routes"
import { getStorage } from "../../../utilities/storage"

export const AuthGuard = () => {
    const token = getStorage<string>('auth_config')
    if (!token) return redirect(ROUTES.LOGIN)
    return token

}
