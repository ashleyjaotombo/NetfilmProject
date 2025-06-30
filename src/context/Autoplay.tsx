import { useContext, createContext, useState } from "react";
import type { AutoplayContextType } from "../typescript/AutoplayContextType";


export const AutoplayContext = createContext<AutoplayContextType>({
    autoplayValue : false,
    setAutoplayValue : ()=>{}
}
);


type Props ={
    children : React.ReactNode
}

export function AutoplayContextProvider({children}:Props){
    const [autoplayValue, setAutoplayValue]=useState(false);

    const autoplayValueContext : AutoplayContextType ={
        autoplayValue,
        setAutoplayValue,
    }

    return (
        <AutoplayContext.Provider value={autoplayValueContext} >{children}</AutoplayContext.Provider>
    );
}


export function useAutoplayContext(){return useContext(AutoplayContext)};
