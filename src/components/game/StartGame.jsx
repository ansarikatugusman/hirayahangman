import SketchySmallWrapper from '../wrappers/SketchySmallWrapper'
import SketchedButton from '../buttons/SketchedButton'

import './StartGame.css'

const StartGame = ({ onClickStart, exitLevel }) => {
    return (
        <SketchySmallWrapper>
            Press start when you are ready.
                <div className='start_game_buttons center'>
                    <div className='start_game_button-wrapper' onClick={onClickStart}>
                        <SketchedButton text='START' width='90px' />
                    </div>
                    <div className='start_game_button-wrapper' onClick={exitLevel} >
                        <SketchedButton text='EXIT' width='90px' />
                    </div>
                </div>
        </SketchySmallWrapper>
    )
}

export default StartGame