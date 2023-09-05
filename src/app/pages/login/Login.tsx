import {useRef, useState, useMemo, useCallback } from "react";

export const Login = () => {
    const inputPasswordRef = useRef<HTMLInputElement>(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const emaillength = useMemo(() => {
        return email.length * 1000;
    }, [email.length]);

    const handleEntrar = useCallback(() => {
        console.log(email);
        console.log(password);
    }, [email, password]);
    return (
        <div>
            <form>
                <p>Quantidades de caracteres no email: {emaillength}</p>
                <label>
                    <span>Email</span>
                    <input value={email} onChange={e => setEmail(e.target.value)}  onKeyDown = {e => e.key === 'Enter' ? inputPasswordRef.current?.focus() : undefined}/>
                </label>
                <label>
                    <span>Senha</span>
                    <input value={password} ref = {inputPasswordRef} onChange={e => setPassword(e.target.value)} />
                </label>
                <button type="button" onClick={handleEntrar}>
                    Entrar
                </button>
            </form>
        </div>
    );
}