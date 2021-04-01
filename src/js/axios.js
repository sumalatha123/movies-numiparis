import axios from 'axios'
var token="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZTE5MWY5ODY0NTZiOWFiYWRhYzQzMTAyZDZiM2I1MSIsInN1YiI6IjYwNjU4N2Q4ZmI1Mjk5MDA1OGMwNWNhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0etNxqLUwgPIR3lRwCgsFTadxGLya4By1DcS2sC_wSc";
export const axios_server = axios.create({
    baseURL: `https://api.themoviedb.org/3/movie/`,
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
axios.get()