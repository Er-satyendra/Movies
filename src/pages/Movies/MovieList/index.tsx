import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LogoutIcon from "../../../components/Icons/LogoutIcon";
import PlusCircleIcon from "../../../components/Icons/PlusCircleIcon";
import MovieEmptyStack from "../../../components/PageComponent/Movies/MovieEmptyStack";
import MovieList from "../../../components/PageComponent/Movies/MovieList";
import Pagination from "../../../components/Shared/Pagination";
import ROUTES from "../../../constants/Routes";
import mainApiService from "../../../service";
import { MOVIES } from "../../../service/APIDefinition";
import { useAppSelector } from "../../../store/Hooks";
import { selectLoader } from "../../../store/Slices/Loader.slice";
import { logOut } from "../../../utilities";

const Movies: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [movies, setMovies] = useState<MovieAPIResponseProps[]>([])
  const [totalPages, setTotalPages] = useState<number>(0)
  const navigate = useNavigate()
  const loader = useAppSelector(selectLoader)

  useEffect(() => {
    getAllMovies()
  }, [currentPage])

  const getAllMovies = async () => {
    const requestedData = MOVIES.GET_ALL<number>(currentPage)
    const result = await mainApiService<{}, MoviesListAPIResponse>(requestedData)

    if (result) {
      setMovies(result?.movies ?? [])
      setCurrentPage(result?.currentPage ?? 1)
      setTotalPages(result?.totalPages ?? 0)
    }
  }

  const logout = () => {
    logOut()
    navigate(ROUTES.LOGIN)
  }

  return (
    <div>
      {(!!movies.length) ?
        <>
          <div className="container">
            <div className='row d-flex aling-items-center my-5'>
              <div className="col-6">
                <h2 className='fs48 fw600'>My Movies <span className='cursor-pointer' onClick={() => navigate(`${ROUTES.MOVIE_EDITOR}/0`)}><PlusCircleIcon /></span></h2>
              </div>
              <div className="col-6 fs16 fw700 d-flex align-items-center justify-content-end cursor-pointer" onClick={logout}>
                Logout <span className='ms-3'><LogoutIcon /></span>
              </div>
            </div>
          </div>

          <MovieList movies={movies} />

          <div>
            <Pagination totalPages={totalPages} itemsPerPage={10} onPageChange={(page: number) => setCurrentPage(page)} currentPage={currentPage} />
          </div>
        </>
        : !loader && <MovieEmptyStack />}
    </div>
  );
}

export default Movies;
