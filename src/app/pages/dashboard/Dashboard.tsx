import { useRef } from 'react';
import { Link } from 'react-router-dom';

export const Dashboard = () => {

    const couterRef = useRef({ counter: 0});

    return (
        <div>
            <p>Dashboard</p>
            <p>Contador: {couterRef.current.counter}</p>
            <button onClick={() => couterRef.current.counter++}>Somar</button>
            <button onClick={() => console.log(couterRef.current.counter++)}>Somar</button>
            <Link to="/Entrar">Login</Link>
        </div>
    );
}