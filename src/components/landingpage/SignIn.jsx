import { useState, useContext } from 'react'
import { useNavigate } from 'react-router'
import { GoogleLogin, useGoogleLogin } from '@react-oauth/google'
import { jwtDecode } from 'jwt-decode'
import AuthContext from '../../context/AuthContext'
import useHttpRequest from '../../hooks/useHttpRequest'
import Loading from '../../utils/Loading'
import ErrorMessage from '../../utils/ErrorMessage'

import './SignIn.css'

const SignIn = () => {
    const [showError, setShowError] = useState(false)
    const { loading, error, fetchRequest} = useHttpRequest()

    const navigate = useNavigate()

    const auth = useContext(AuthContext)

    const googleSignIn = useGoogleLogin({
        onSuccess: async ({ code }) => {
            let tokens
            let user

            try {
                tokens = await fetchRequest(
                    `${import.meta.env.VITE_BACKEND_URL}/googleAuth`, 
                    'POST',
                    { 'Content-Type': 'application/json' },
                    JSON.stringify({
                        code: code
                    })
                )
            } catch (err) {
                setShowError(true)
            }

            try {
                user = await fetchRequest(
                    'https://www.googleapis.com/oauth2/v3/userinfo',
                    'GET',
                    { Authorization: 'Bearer ' + tokens.access_token }
                )

                user = await fetchRequest(
                    `${import.meta.env.VITE_BACKEND_URL}/signin`, 
                    'POST',
                    { 'Content-Type': 'application/json' },
                    JSON.stringify({
                        name: user.given_name,
                        email: user.email
                    })
                )

                auth.login(user.id, user.token)
            } catch (err) {
                setShowError(true)
            }

            navigate('/')
        },

        flow: 'auth-code'
    })

    const signIn = async (credentialResponse) => {
        let userCredentials = credentialResponse.credential
        navigate('/')
        try {
            const data = await fetchRequest(
                `${import.meta.env.VITE_BACKEND_URL}/signin`, 
                'POST',
                { 'Content-Type': 'application/json' },
                JSON.stringify({
                    name: jwtDecode(userCredentials).given_name,
                    email: jwtDecode(userCredentials).email
                })
                )
                
            auth.login(data.id, data.token)
        } catch (error) { 
            setShowError(true)
        }
    }

    return(
        <div className='signin-container center'>
            {loading && <Loading />}
            {showError && <ErrorMessage error={error} setShowError={setShowError} />}
            <div className='signin-wrapper center'>
                <div className='signin_header center'>
                    PLAY NOW
                </div>
                <GoogleLogin 
                    onSuccess={credentialResponse => signIn(credentialResponse)}
                    useOneTap
                    shape='pill'
                    theme='filled_black'
                    containerProps={{
                        style: {
                            cursor: 'cell'
                        },
                    }}
                />
                <div className='signin-wrapper-back'></div>
            </div>
            
            
        </div>
    )
}

export default SignIn