import { API_URLS, HTTP_METHODS } from "../constants/APIConstants";

export const AUTH = ({
  LOGIN: <T>(data: T) => ({
    url: API_URLS.LOGIN,
    method: HTTP_METHODS.POST,
    data: data as T,
    showAlert: true
  } as APIProps<T>),

  REGISTER: <T>(data: T) => ({
    url: API_URLS.REGISTER,
    method: HTTP_METHODS.POST,
    data: data as T,
    showAlert: true
  } as APIProps<T>),
});

export const MOVIES = ({
  GET_ALL: <T>(data: T) => ({
    url: API_URLS.GET_ALL_MOVIES + `?page=${data}&limit=10`,
    method: HTTP_METHODS.GET,
    data: {} as T,
    showAlert: false
  } as APIProps<T>),
  GET_BY_ID: <T>(id: T) => ({
    url: API_URLS.GET_MOVIE_BY_ID + id,
    method: HTTP_METHODS.GET,
    data: {} as T,
    showAlert: false
  } as APIProps<T>),
  CREATE_MOVIE: <T>(data: T) => ({
    url: API_URLS.SAVE_MOVIE,
    method: HTTP_METHODS.POST,
    data: data as T,
    showAlert: true
  } as APIProps<T>),
  UPDATE_MOVIE: <T, R>(id: T, movieData: R) => ({
    url: API_URLS.SAVE_MOVIE + id,
    method: HTTP_METHODS.PUT,
    data: movieData,
    showAlert: true
  } as APIProps<R>),
});


export const FILE = ({
  UPLOAD: <T>(data: T) => ({
    url: API_URLS.UPLOAD,
    method: HTTP_METHODS.POST,
    data: data as T,
    showAlert: true,
    headers: { 'Content-Type': 'multipart/form-data' }
  } as APIProps<T>),
});