import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import '../signIn/SignIn'
import { toast } from 'react-toastify'
import { AuthContext } from '../../contexts/auth'

import Logo from '../../images/logo.png'

function SignUn() {

    const { signUp, loadingAuth } = useContext(AuthContext)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function handleSubmit(e){
      e.preventDefault()
      if(name !== '' && email !== '' && password !== ''){
           await signUp(name, email, password)
      }else {
        toast.error('Preencha todos os campos')
      }
    }
    
    return (
        <div className="container-center">
            <div className="login">
                <div className="login-area">
                    <img src={Logo} alt="logo do sistema de chamados" />
                </div>

                <form onSubmit={handleSubmit}>
                    <h1>Cadastrar nova conta</h1>

                    
                    <input
                        type="text"
                        name="name"
                        value={name}
                        id="name_user"
                        placeholder='Seu nome'
                        onChange={(e) => setName(e.target.value)}
                    />

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
                        placeholder='*********'
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button type="submit" value="Acessar">{loadingAuth ? 'Carregando' : 'Cadastrar'}</button>
                </form>

                <Link to='/'>Já possui uma conta ? Faça login</Link>

            </div>
        </div>
    )
}

export default SignUn