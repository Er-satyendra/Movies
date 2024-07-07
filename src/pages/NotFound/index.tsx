import { useNavigate } from "react-router-dom"
import Button from "../../components/Shared/Button"
import ERROR_MESSAGES from "../../constants/Messages"
import ROUTES from "../../constants/Routes"

const NotFound: React.FC<NotFoundProps> = ({message = ERROR_MESSAGES.PAGE_NOT_FOUND}: NotFoundProps) => {
    const navigate = useNavigate()
    return (
        <div className='d-flex align-items-center min-vh-100'>
        <div className='container'>
            <div className="row">
                <div className="col-12">
                    <h2 className='fs48 fw600 text-center'>{message}</h2>
                    <div className='mt-5 d-flex justify-content-center'>
                        <Button label='Go to movies' width={'200px'} onClick={() => navigate(`${ROUTES.MOVIE_EDITOR}/0`)} />
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default NotFound