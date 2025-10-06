import { useState, useContext } from 'react'
import { useNavigate } from 'react-router'
import { GoogleLogin } from '@react-oauth/google'
import { jwtDecode } from 'jwt-decode'
import AuthContext from '../context/AuthContext'
import useHttpRequest from '../hooks/useHttpRequest'
import Loading from '../utils/Loading'
import SketchedButton from '../components/buttons/SketchedButton'

import './Login.css'

const Login = () => {
    const { loading, error, fetchRequest} = useHttpRequest()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const auth = useContext(AuthContext)

    const emailChangeHandler = e => {
        setEmail(e.target.value)
    }

    const passwordChangeHandler = e => {
        setPassword(e.target.value)
    }

    const submitFormHandler = async (e) => {
        e.preventDefault()

        try {
            const data = await fetchRequest(`${import.meta.env.VITE_BACKEND_URL}/login`, 
                'POST', 
                { 'Content-Type': 'application/json',},
                JSON.stringify({
                    email: email, 
                })
            )

            auth.login(data.id, data.token)
            navigate('/')
        } catch (err) { }
    }

    return (
        <div className='login_form-container ohp center' >
            {loading && <Loading />}
            <div className='login_form-wrapper'>
                <form className='login_form' >
                    <h1 className='login_text'>SIGN IN</h1>
                    <input className='login_input' value={email} id='email' type='email' placeholder='Email' autoComplete='on' onChange={emailChangeHandler} />
                    <input className='login_input' value={password} id='password' type='password' minLength='8' placeholder='Password' onChange={passwordChangeHandler} style={{ marginBottom: '20px' }} />
                    <div className='login_button-wrapper center' onClick={submitFormHandler}>
                        <SketchedButton className='login_button' text='LOGIN' width='100%' fontsize='1rem' />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login