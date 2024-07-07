interface MoviesListAPIResponse {
    message: string,
    totalPages: number,
    currentPage: number,
    movies: MovieAPIResponseProps[]
}

interface MovieAPIResponseProps {
    id: number,
    title: string,
    publishingYear: string,
    image: string,
    userId: number,
    createdAt: string,
    updatedAt: string
}

interface MovieFormProps {
    movieName: string,
    publishYear: string,
    image: string,
    file: file
}

interface MovieFormErrorProps {
    movieName?: string,
    publishYear?: string,
    image?: string,
    file?: file
}

interface MovieListProps {
    movies: MovieAPIResponseProps[]
}

interface MovieCardProps {
    movie: MovieAPIResponseProps
}

interface MovieAPIResponseProps {
    message: string,
    movie: MovieAPIResponseProps
}

interface UploadAPIResponseProps {
    message: string,
    filePath: string
}
interface MovieRequestData {
    title: string,
    publishingYear: string
    image: string
}