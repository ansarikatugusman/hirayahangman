import SketchySmallWrapper from '../wrappers/SketchySmallWrapper'
import SketchedButton from '../buttons/SketchedButton'

import './StartGame.css'

const StartGame = ({ onClickStart, exitLevel }) => {
    return (
        <SketchySmallWrapper>
            Press start when you are ready.
                <div className='start_game_buttons center'>
                    <SketchedButton text='START' width='90px' onClickHandler={onClickStart}/>
                    <SketchedButton text='EXIT' width='90px' onClickHandler={exitLevel}  />
                </div>
        </SketchySmallWrapper>
    )
}

export default StartGame