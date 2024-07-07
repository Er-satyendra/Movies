import React from 'react';
import { useAppSelector } from '../../../store/Hooks';
import { selectLoader } from '../../../store/Slices/Loader.slice';
import './Loader.scss';

const Loader: React.FC<LoaderProps> = ({ alwaysTrue = false }: LoaderProps) => {
  const loader = useAppSelector(selectLoader)
  return (
    <>
      {
        (loader || alwaysTrue) && (<div className="d-flex justify-content-center align-items-center loader-container">
          <div className="spinner-border text-light" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>)
      }</>

  );
};

export default Loader;
