import { useRef } from 'react'
import SketchedButton from '../components/buttons/SketchedButton'
import './ErrorMessage.css'

const ErrorMessage = ({ error, setShowError }) => {
    const errorMessage = useRef()

    const onOkayHandler = () => {
        setShowError(false)
        errorMessage.current.close()
    }

    return (
        <div className='error_message-container modal'>
            <dialog className='error_message center' ref={errorMessage}>
                <div className='error ohpw center'>
                    {error}
                </div>
                <div className='error_okay center' onClick={onOkayHandler}>
                    <SketchedButton width='78px' text='OKAY' />
                </div>
            </dialog>
            <div className='error_message-back'></div>
        </div>
    )
}

export default ErrorMessage