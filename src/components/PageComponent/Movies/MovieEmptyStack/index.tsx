import React from 'react';
import { useNavigate } from 'react-router-dom';
import ROUTES from '../../../../constants/Routes';
import Button from '../../../Shared/Button';

const MovieEmptyStack: React.FC = () => {
    const navigate = useNavigate()
    return (
        <div className='d-flex align-items-center min-vh-100'>
            <div className='container'>
                <div className="row">
                    <div className="col-12">
                        <h2 className='fs48 fw600 text-center'>Your movie list is empty</h2>
                        <div className='mt-5 d-flex justify-content-center'>
                            <Button label='Add a new movie' width={'200px'} onClick={() => navigate(`${ROUTES.MOVIE_EDITOR}/0`)} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieEmptyStack;
