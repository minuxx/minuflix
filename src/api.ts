const API_KEY = 'ed8f5e6c3b01b09d1cf884f7315fc7de'
const BASE_URL = 'https://api.themoviedb.org/3'

export interface IMedia {
  id: number
  backdrop_path: string
  poster_path: string
  overview: string
  name?: string
  title?: string
}

export interface IGetMdediasResult {
  dates?: {
    maximum: string
    minimun: string
  }
  page: number
  results: IMedia[]
  total_page: number
  total_results: number
}

export function getNowPlayingMovies() {
  return fetch(`${BASE_URL}/movie/now_playing?api_key=${API_KEY}`).then(
    (response) => response.json()
  )
}

export function getLatestMovie() {
  console.log(`${BASE_URL}/movie/latest?api_key=${API_KEY}`)
  return fetch(`${BASE_URL}/movie/latest?api_key=${API_KEY}`).then((response) =>
    response.json()
  )
}

export function getTopRatedMovies() {
  return fetch(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}`).then(
    (response) => response.json()
  )
}

export function getUpcomingMovies() {
  return fetch(`${BASE_URL}/movie/upcoming?api_key=${API_KEY}`).then(
    (response) => response.json()
  )
}

export function getAiringTodayTvShows() {
  return fetch(`${BASE_URL}/tv/airing_today?api_key=${API_KEY}`).then(
    (response) => response.json()
  )
}
export function getPopularTvShows() {
  return fetch(`${BASE_URL}/tv/popular?api_key=${API_KEY}`).then((response) =>
    response.json()
  )
}
export function getTopRatedTvShows() {
  return fetch(`${BASE_URL}/tv/top_rated?api_key=${API_KEY}`).then((response) =>
    response.json()
  )
}