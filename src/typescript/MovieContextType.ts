import type { MovieType } from "./Movie";



export type MovieContextType = {
    MovieValue : MovieType | undefined,
    setMovieValue : React.Dispatch<React.SetStateAction<MovieType | undefined>>,
}