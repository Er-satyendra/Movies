import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '../../../components/Shared/Button';
import Dropzone from '../../../components/Shared/Dropzone';
import InputField from '../../../components/Shared/FieldInput';
import ROUTES from '../../../constants/Routes';
import mainApiService from '../../../service';
import { FILE, MOVIES } from '../../../service/APIDefinition';
import { validateMovieForm } from '../../../validations/MovieForm';
import './MovieEditor.scss';

const MovieEditor: React.FC = () => {
  const [movieDetails, setMovieDetails] = useState<MovieFormProps>({ movieName: '', publishYear: '', image: '', file: '' })
  const [errors, setErrors] = useState<MovieFormErrorProps>({})
  const navigate = useNavigate()
  const { type } = useParams<{ type: string }>()

  useEffect(() => {
    if (type !== '0')
      getMovieData()
  }, [])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setMovieDetails((prev) => ({ ...prev, [event.target.name]: event.target.value }))
  };

  const getMovieData = async () => {
    const requestedData = MOVIES.GET_BY_ID<string>(type as string)
    const result = await mainApiService<string, MovieAPIResponseProps>(requestedData)

    if (result) {
      setMovieDetails({ movieName: result?.movie?.title, publishYear: result?.movie?.publishingYear, image: result?.movie?.image, file: null })
    }
  }

  const uploadFile = async () => {
    if (movieDetails.file) {
      const formData = new FormData();
      formData.append('file', movieDetails.file);

      const requestedData = FILE.UPLOAD<FormData>(formData)
      const result = await mainApiService<FormData, UploadAPIResponseProps>(requestedData)
      if (result) {
        return result.filePath
      }
    }

    return movieDetails?.image
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationErrors = validateMovieForm(movieDetails);

    if (Object.keys(validationErrors)?.length) {
      setErrors(validationErrors)
      return
    }

    let movieData: MovieRequestData = { title: movieDetails.movieName, publishingYear: movieDetails.publishYear, image: '' }

    const filePath: string = await uploadFile()
    if (filePath) {
      movieData = { ...movieData, image: filePath }
    }

    let requestedData;
    if (type !== '0') {
      requestedData = MOVIES.UPDATE_MOVIE<string, MovieRequestData>(type as string, movieData)
    }
    else {
      requestedData = MOVIES.CREATE_MOVIE<MovieRequestData>(movieData)
    }

    const result = await mainApiService<string | {}, MovieAPIResponseProps>(requestedData)

    if (result) {
      navigate(ROUTES.MOVIE_LIST)
    }
  };

  return (
    <div className=''>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="fs48 fw600 my-5 py-5">{type !== '0' ? 'Edit' : 'Create a new movie'}</h2>
          </div>
        </div>
        <div className="row g-5">
          <div className="col-12 col-sm-12 col-md-6 col-lg-4">
            <Dropzone error={errors?.file} getFile={(fileData: File) => setMovieDetails((prev) => ({ ...prev, file: fileData }))} image={movieDetails?.image} />
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-5">
            <form onSubmit={handleSubmit}>
              <div className='row'>
                <div className="col-12">
                  <div className='ps-0 ps-sm-0 ps-md-5'>
                    <InputField error={errors?.movieName} label="Title" type="text" name="movieName" value={movieDetails.movieName} onChange={handleChange} />
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-lg-6">
                  <div className=' mt-4 ps-0 ps-sm-0 ps-md-5'>
                    <InputField error={errors?.publishYear} label="Publishing Year" type="number" name="publishYear" value={movieDetails.publishYear} onChange={handleChange} />
                  </div>
                </div>
                <div className="col-12">
                  <div className='gap-4 d-flex ps-0 ps-sm-0 ps-md-5 mt-5 pt-4'>
                    <div className='w-100'>
                      <Button label='Cancel' btnType="secondary" type='button' onClick={() => navigate(ROUTES.MOVIE_LIST)} />
                    </div>
                    <div className='w-100 ps-0'>
                      <Button label={type !== '0' ? 'Update' : 'Submit'} btnType="primary" type='submit' />
                    </div>
                  </div>
                </div>
              </div>
            </form>

          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieEditor;
