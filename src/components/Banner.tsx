import type { MovieType } from "../typescript/Movie";
import { useMovieContext } from "../context/MovieContext";
import { useAutoplayContext } from "../context/Autoplay";
import { usePlayContext } from "../context/PlayContext";
import { useNavigate } from "react-router-dom";
import { useLoginContext } from "../context/LoginContext";


type Props = {
  Content: MovieType;
};

function Banner({ Content }: Props) {
  const context=useMovieContext();
  const autoplayContext = useAutoplayContext();
  const MoviePlay=usePlayContext();
  const navigate=useNavigate();
  const LogContext=useLoginContext();

  return (
    <div className="relative mb-10 flex h-[75vh] w-full flex-col justify-center overflow-hidden p-8 text-white">
      <img
        className="absolute left-0 top-0 z-0 h-full w-full object-cover brightness-50"
        src={Content.image_url}
        alt="Background"
      />

      <img
        className="absolute left-0 top-0 z-10 h-auto w-48"
        src="/Images/logo.jpg"
        alt="Logo"
      />

      <h2 className="relative z-10 mt-20 text-5xl font-bold">{Content.name}</h2>
      <h5 className="z-10 mt-2 text-base text-zinc-400">
        Réalisé : {Content.date}
      </h5>
      <h4 className="z-10 my-5 max-w-xl italic">{Content.description}</h4>

      {LogContext.loginValue ? (
        <section className="absolute right-0 top-0 z-10 flex gap-4 p-4">
        <button className="bg-transparent px-4 py-2 text-base font-bold text-white hover:opacity-80"
        onClick={() => navigate("/log")}
        >
          {LogContext.loginValue?.name}
        </button>
        <button className="bg-red-600 px-4 py-2 text-base font-bold text-white hover:opacity-8 rounded-sm"
        onClick={()=>{
          LogContext.setLoginValue(undefined);
          navigate("/log");
        }}
        >Se déconnecter
        </button>
      </section>
      ) : (
        <section className="absolute right-0 top-0 z-10 flex gap-4 p-4">
        <button className="bg-transparent px-4 py-2 text-base font-bold text-white hover:opacity-80"
        onClick={() => navigate("/log")}
        >
          Connexion
        </button>
        <button className="bg-red-600 px-4 py-2 text-base font-bold text-white hover:opacity-8 rounded-sm"
        onClick={()=>navigate("/signup")}
        >Créer un compte
        </button>
      </section>
      )}

      

      <section className="relative z-10 mt-6 flex gap-4">
        <button className="rounded bg-white px-6 py-2 text-base font-bold text-black hover:bg-zinc-200"
        onClick={()=>{
          MoviePlay.setValuePlay(Content);
          setTimeout(() => navigate("/broadcast"), 0);
        }}
        >
          ▶ Lecture
        </button>
        <button className="rounded bg-zinc-500 px-6 py-2 text-base font-bold text-white hover:bg-zinc-200 hover:text-black"
        onClick={()=>{
          context.setMovieValue(Content);
          autoplayContext.setAutoplayValue(true);
        }}
        >
          Plus d'infos
        </button>
      </section>
    </div>
  );
}

export default Banner;
