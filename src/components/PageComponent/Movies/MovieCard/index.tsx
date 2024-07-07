import React, { useEffect, useState } from 'react';
import './MovieCard.scss';

import { useNavigate } from 'react-router-dom';
import DefaultImage from '../../../../assets/Images/default_movie_card_img.png';
import ROUTES from '../../../../constants/Routes';
const MovieCard: React.FC<MovieCardProps> = ({ movie }: MovieCardProps) => {

    const [imageSrc, setImageSrc] = useState('');
    const navigate = useNavigate()

    const handleError = () => {
        setImageSrc(DefaultImage);
    };

    useEffect(() => {
        setImageSrc(movie?.image)
    }, [movie?.image])

    return (
        <div className='movie__card cursor-pointer' onClick={()=>navigate(`${ROUTES.MOVIE_EDITOR}/${movie.id}`)}>
            <div className='movie__card-img'>
                <img src={imageSrc} alt="movie card" onError={handleError}/>
            </div>
            <div className='ps-2'>
                <p className='fs20 fw500 mt-3'>{movie?.title}</p>
                <p className='fs14 fw400'>{movie?.publishingYear}</p>
            </div>
        </div>
    );
};

export default MovieCard;
