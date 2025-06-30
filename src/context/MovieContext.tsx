import { useContext, createContext, useState } from "react";
import type { MovieContextType } from "../typescript/MovieContextType";
import type { MovieType } from "../typescript/Movie";

 



export const MovieContext = createContext<MovieContextType | undefined>(undefined);




type Props ={
    children : React.ReactNode
}

export default function MovieContextProvider({children} : Props){
    const [MovieValue, setMovieValue]=useState<MovieType>();

    const valueMovieContext : MovieContextType ={
        MovieValue,
        setMovieValue,
    }

    return (
        <MovieContext.Provider value={valueMovieContext}>{children}</MovieContext.Provider>
    );
}


export function useMovieContext() {
  const context = useContext(MovieContext);
  if (!context) {
    throw new Error("Erreur");
  }
  return context;
}