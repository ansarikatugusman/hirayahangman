import { useState, useContext } from 'react'
import { useNavigate } from 'react-router'
import { GoogleLogin } from '@react-oauth/google'
import { jwtDecode } from 'jwt-decode'
import AuthContext from '../context/AuthContext'
import useHttpRequest from '../hooks/useHttpRequest'
import Loading from '../utils/Loading'
import SketchedButton from '../components/buttons/SketchedButton'

import './Register.css'

const Register = () => {
    const { loading, error, fetchRequest} = useHttpRequest()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const auth = useContext(AuthContext)

    const nameChangeHandler = e => {
        setName(e.target.value)
    }

    const emailChangeHandler = e => {
        setEmail(e.target.value)
    }

    const passwordChangeHandler = e => {
        setPassword(e.target.value)
    }

    const submitFormHandler = async (e) => {
        e.preventDefault()

        try {
            const data = await fetchRequest(`${import.meta.env.VITE_BACKEND_URL}/register`, 
                'POST',
                { 'Content-Type': 'application/json' },
                JSON.stringify({
                    name: name, 
                    email: email, 
                    password: password
                })
            )

            auth.login(data.id, data.token)
            navigate('/')
        } catch (err) { }
    }

    return (
        <div className='register_form-container ohpv center' >
            {loading && <Loading />}
            <div className='register_form-wrapper'>
                <form className='register_form' >
                    <h1 className='register_text'>SIGN UP</h1>
                    <input className='register_input' value={name} id='name' type='text' minLength='2' placeholder='Name' autoComplete='on' onChange={nameChangeHandler} />
                    <input className='register_input' value={email} id='email' type='email' placeholder='Email' autoComplete='on' onChange={emailChangeHandler} />
                    <input className='register_input' value={password} id='password' type='password' minLength='8' placeholder='Password' onChange={passwordChangeHandler} style={{ marginBottom: '20px' }} />
                    <div className='register_button-wrapper center' onClick={submitFormHandler}>
                        <SketchedButton className='register_button' text='REGISTER' width='100%' fontsize='1rem' />
                    </div>
                </form>
                <GoogleLogin onSuccess={async (credentials) => {
                    let userCredentials = credentials.credential
                    //let c = credentials.credential
                    //console.log(jwtDecode(c).email)
                    //console.log(jwtDecode(c))
                    try {
                        const data = await fetchRequest(`${import.meta.env.VITE_BACKEND_URL}/register`, 
                            'POST',
                            { 'Content-Type': 'application/json' },
                            JSON.stringify({
                                name: jwtDecode(userCredentials).given_name, 
                                email: jwtDecode(userCredentials).email, 
                            })
                        )

                        auth.login(data.id, data.token)
                        navigate('/')
                    } catch (err) { }
                }} />
            </div>
        </div>
    )
}

export default Register