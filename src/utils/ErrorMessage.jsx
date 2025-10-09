import SketchySmallWrapper from '../components/wrappers/SketchySmallWrapper'
import SketchedButton from '../components/buttons/SketchedButton'
import './ErrorMessage.css'

const ErrorMessage = ({ error, setShowError }) => {

    const onOkayHandler = () => {
        setShowError(false)
    }

    return (
        <SketchySmallWrapper>
            <div className='error ohpw center'>
                {error}
            </div>
            <div className='error_okay center' onClick={onOkayHandler}>
                <SketchedButton width='78px' text='OKAY' />
            </div>
        </SketchySmallWrapper>
    )
}

export default ErrorMessage