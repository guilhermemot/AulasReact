import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useUsuarioLogado } from '../../shared/hooks';

export const Dashboard = () => {

    const couterRef = useRef({ counter: 0});
    const usuarioLogadoContext = useUsuarioLogado();
    //Outra opção ^ = const { nomeDoUsuario} = useContext(UsuarioLogadoContext);

    return (
        <div>
            <p>Dashboard</p>
            <p>{usuarioLogadoContext.nomeDoUsuario}</p>
            <p>Contador: {couterRef.current.counter}</p>
            <button onClick={() => couterRef.current.counter++}>Somar</button>
            <button onClick={() => console.log(couterRef.current.counter++)}>Somar</button>
            <Link to="/Entrar">Login</Link>
        </div>
    );
}