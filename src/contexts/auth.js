
import { useState, useEffect, createContext } from 'react'
import { auth, db } from '../services/firebaseConnection'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { doc, getDoc, setDoc } from 'firebase/firestore'
import React from 'react';

import { toast } from 'react-toastify'

import { useNavigate } from 'react-router-dom'
import { async } from '@firebase/util';

export const AuthContext = createContext({});

function AuthProvider({ children }) {

    const [user, setUser] = useState(null)
    const [loadingAuth, setLoadingAuth] = useState(false)
    const [load, setLoad] = useState(true)

    const navigate = useNavigate()

    // Take the info of the user in the base 
    useEffect(() => {
        async function loadUSer() {
            const storageUser = localStorage.getItem('@tickesPRO')

            if (storageUser) {
                setUser(JSON.parse(storageUser))
                setLoad(false)
            }
            setLoad(false)
        }
        loadUSer()
    }, [])



    // Functión for login
    async function signIn(email, password) {
        setLoadingAuth(true)

        await signInWithEmailAndPassword(auth, email, password)
            .then(async (value) => {
                let uid = value.user.uid
                const docRef = doc(db, 'users', uid)
                const docSnap = await getDoc(docRef)

                let data = {
                    uid: uid,
                    nome: docSnap.data().nome,
                    email: value.user.email,
                    avatarUrl: docSnap.data().avatarUrl
                }

                setUser(data);
                storageUser(data);
                setLoadingAuth(false);
                toast.success('Seja bem vindo!')
                navigate('/Dashboard')
            })
            .catch((error) => {
                console.log(error)
                setLoadingAuth(false)
                toast.error('Ops, algo deu errado!')
            })
    }

    // Functión for register
    async function signUp(name, email, password) {
        setLoadingAuth(true)

        await createUserWithEmailAndPassword(auth, email, password)
            .then(async (value) => {
                let uid = value.user.uid

                await setDoc(doc(db, 'users', uid), {
                    nome: name,
                    avatarUrl: null,
                })
                    .then(() => {
                        let data = {
                            uid: uid,
                            nome: name,
                            email: value.user.email,
                            avatarUrl: null
                        }
                        setUser(data)
                        storageUser(data)
                        setLoadingAuth(false)
                        toast.success('Seja bem vindo no sistema')
                        navigate('/Dashboard')
                    })
            })
            .catch((error) => {
                console.log(error)
                toast.error('Algo deu errado!')
                setLoadingAuth(false)
            })
    }
    // Save the info user in the localStorage
    function storageUser(data) {
        localStorage.setItem('@tickesPRO', JSON.stringify(data))
    }

    async function logout(){
        await signOut(auth)
        localStorage.removeItem('@tickesPRO')
        setUser(null)
    }


    return (

        <AuthContext.Provider
            value={{
                signed: !!user,
                user,
                signIn,
                signUp,
                logout,
                loadingAuth,
                load,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider