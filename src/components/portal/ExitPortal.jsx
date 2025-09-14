import { Html } from '@react-three/drei'
import SketchedButton from '../buttons/SketchedButton'

import './ExitPortal.css'

const ExitPortal = ({ name, handleActivePortal }) => {

    const onClickExitPortal = () => {
        handleActivePortal(name)
    }

    return (
        <Html style={{ position: 'absolute', top: '-47.5vh', left: '-47.5vw' }} >
            <div className='exit_portal-container' onClick={() => onClickExitPortal()}>
                <SketchedButton text='GO BACK' width='125px' onClickHandler={onClickExitPortal}  />
            </div>
        </Html>
    )
}

export default ExitPortal