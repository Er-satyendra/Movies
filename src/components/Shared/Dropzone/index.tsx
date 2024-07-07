import React, { useCallback, useEffect, useState } from 'react';
import DownloadIcon from '../../Icons/DownloadIcon';
import './Dropzone.scss';

const Dropzone: React.FC<DropzoneProps> = ({ error, getFile, image }: DropzoneProps) => {
    const [isDragActive, setIsDragActive] = useState(false);
    const [fileName, setFileName] = useState('')

    useEffect(()=>{
        setFileName(image as string)
    }, [image])

    const handleDragEnter = useCallback((e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragActive(true);
    }, []);

    const handleDragLeave = useCallback((e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragActive(false);
    }, []);

    const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
    }, []);

    const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragActive(false);
        const droppedFiles = Array.from(e.dataTransfer.files);
        handleFiles(droppedFiles);
    }, []);

    const handleFileInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFiles = Array.from(e.target.files || []);
        handleFiles(selectedFiles);
    }, []);

    const handleFiles = (files: File[]) => {
        const file = files[0]
        setFileName(file.name)
        getFile(file)
    };

    return (
        <>
         <div
            className={`movie__dropzone position-relative ${isDragActive ? 'active' : ''}`}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            onClick={() => document.getElementById('fileInput')?.click()}
        >
            <div className="text-center">
                <DownloadIcon />
                <div className="mt-3">Drop an image here or click to select</div>
                {fileName && <div className="mt-3 word-wrap">{fileName}</div>}
            </div>
            <input
                type="file"
                id="fileInput"
                accept="image/*"
                multiple
                style={{ display: 'none' }}
                onChange={handleFileInputChange}
            />
        </div>
            {error && <div className='text-danger fs12 fw700 ps-1'>{error}</div>}
        </>
       


    );
};

export default Dropzone;
