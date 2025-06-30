import { useNavigate } from "react-router-dom";
import { TabLogin } from "../data/Login";
import type { Login } from "../typescript/Login";
import { useState } from "react";
import { useLoginContext } from "../context/LoginContext";

function Log(){
    const navigate=useNavigate();
    const [mail, setMail]=useState("");
    const [password, setPassword]=useState("");
    const LogContext=useLoginContext();
    const [loginError, setLoginError]=useState(false);

    function handleSubmit(e : React.FormEvent){
        e.preventDefault();
        const index = TabLogin.findIndex(log=>log.mail===mail && log.password===password);
        console.log(TabLogin);
        console.log(mail);
        
        if (index!==-1){
            LogContext.setLoginValue(TabLogin[index]);
            setLoginError(false);
            navigate("/welcome");
        }
        else{
            setLoginError(true);
        }
    }


    return (
        <div className=" relative h-screen w-screen flex flex-col items-center justify-center">
            <img className=" absolute h-full w-full object-cover brightness-50" src="/Images/loginbackground.jpg"/>

            <ul className="absolute top-0 flex justify-between text-white w-[95%] m-4">
                <li><button className="bg-zinc-700 py-2 px-4 rounded-md"
                onClick={()=>navigate("/welcome")}
                >Retour</button></li>
                <li>
                    <ul className="flex gap-8">

                        <li><button className="rounded-md bg-red-600 px-4 py-2"
                        onClick={()=>navigate("/log")}
                        >Connexion</button></li>

                        <li><button className="rounded-md bg-zinc-400 px-4 py-2"
                        onClick={()=>navigate("/signup")}
                        >Créer un compte</button></li>
                    </ul>
                </li>
            </ul>
            

            <div className=" h-[65%] w-[520px] bg-zinc-800/80 flex flex-col items-center brightness-100 rounded-md">
                <form className="m-4"
                onSubmit={handleSubmit}
                >
                    <h1 className="text-3xl text-white font-bold mb-8">Identifiez-vous</h1>

                    {loginError && (
                        <p className="text-red-600">L'adresse mail ou le mot de passe est incorrect.</p>
                    )}

                    <input className="px-2 py-4 mb-10 w-96 rounded-sm bg-transparent text-zinc-400 border" 
                    type="email" placeholder="E-mail" autoComplete="username" value={mail} onChange={(e)=>setMail(e.target.value)}/><br/>

                    <input className="px-2 py-4 mb-8 w-96 rounded-sm bg-transparent text-zinc-400 border" 
                    type="password" placeholder="Mot de passe" autoComplete="username" value={password} onChange={(e)=>setPassword(e.target.value)}/><br/>

                    <button className="bg-red-600 text-white w-96 text-center py-2 rounded-sm" 
                    type="submit">M'identifier</button>

                    <h2 className="text-zinc-500 text-center m-4">OU</h2>

                    <button className="bg-zinc-500/80 w-96 py-2 rounded-sm text-white" type="button"
                    onClick={()=>navigate("/signup")}
                    >Créer un compte</button>

                </form>
            </div>
        </div>
    );
}

export default Log;



