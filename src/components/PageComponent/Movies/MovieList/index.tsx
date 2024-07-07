import React from 'react';
import MovieCard from '../MovieCard';

const MovieList: React.FC<MovieListProps> = ({ movies }: MovieListProps) => {
    return (
        <div className='py-5'>
            <div className='container'>
                <div className="row g-4">
                    {movies.map((movie: MovieAPIResponseProps) => (
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={movie.id}>
                            <MovieCard movie={movie}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MovieList;






