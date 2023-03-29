import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import './signIn.css'
import { AuthContext } from '../../contexts/auth'
import { toast } from 'react-toastify'

import Logo from '../../images/logo.png'

function SignIn(){

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { signIn, loadingAuth } = useContext(AuthContext)

    async function handleSignIn(e){
        e.preventDefault();

        if(email !== '' && password !== ''){
           await signIn(email, password)
        }else {
            toast.error('Preencha todos os campos!')
        }
    }

    return (
        <div className="container-center">
            <div className="login">
                <div className="login-area">
                    <img src={Logo} alt="logo do sistema de chamados" />
                </div>

                <form onSubmit={handleSignIn}>
                    <h1>Entrar</h1>


                    <input
                        type="text"
                        name="email"
                        value={email}
                        id="email_user"
                        placeholder='email@email.com'
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <input
                        type="password"
                        name="password"
                        value={password}
                        id="password_user"
                        placeholder='*******'
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button type="submit" value="Acessar">{loadingAuth ? 'Carregando' : 'Acessar'}</button>
                </form>

                <Link to='/signUp'>Criar uma conta</Link>

            </div>
        </div>
    )
}

export default SignIn