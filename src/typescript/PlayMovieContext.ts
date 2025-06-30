import type { MovieType } from "./Movie";

export type PlayContextType={
    valuePlay: MovieType,
    setValuePlay: React.Dispatch<React.SetStateAction<MovieType>>
}
