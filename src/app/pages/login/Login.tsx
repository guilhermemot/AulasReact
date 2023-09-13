import { useRef, useState, useMemo, useCallback } from "react";
import { InputLogin } from "./components/inputLogin";

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
                <InputLogin
                    label="Email"
                    value={email}
                    onChange={newValue => setEmail(newValue)}
                    onPressEnter={() => inputPasswordRef.current?.focus()}
                />

                <InputLogin
                    label="Senha"
                    type="password"
                    value={password}
                    ref={inputPasswordRef}
                    onChange={newValue => setPassword(newValue)}
                />
                <button type="button" onClick={handleEntrar}>
                    Entrar
                </button>
            </form>
        </div>
    );
}