import React, { createContext, useCallback, useEffect, useState } from "react";


interface IUsuarioLogadoContextData{
    nomeDoUsuario: string;
    logout: () => void;
    
}
export const UsuarioLogadoContext = createContext<IUsuarioLogadoContextData>({} as IUsuarioLogadoContextData);

interface IUsuarioLogadoProviderProps{
    children: React.ReactNode
}
export const UsuarioLogadoProvider: React.FC<IUsuarioLogadoProviderProps> = ({ children }) =>{

    let [nome, setNome] = useState('');

    useEffect(() =>{
        setTimeout(() =>{
            setNome('Lucas');
        }, 1000);
    });

    const handleLogout = useCallback(() =>{
        console.log('Logout executou')
    }, []);

    return(
        <UsuarioLogadoContext.Provider value={{nomeDoUsuario: 'Lucas', logout: handleLogout}}>
            {children}
        </UsuarioLogadoContext.Provider>
    );
}