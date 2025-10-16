import SketchySmallWrapper from '../wrappers/SketchySmallWrapper'
import SketchedButton from '../buttons/SketchedButton'

import './ExitPrompt.css'

const ExitPrompt = ({ onFailGame, onCancelExitGame }) => {
    return (
        <SketchySmallWrapper>
            You already started the game, are you sure you want to exit? There is a penalty for exiting.
                <div className='exit_game_buttons center'>
                    <SketchedButton text='YES' width='75px' onClickHandler={() => { onFailGame(true) }}/>
                    <SketchedButton text='NO' width='75px' onClickHandler={onCancelExitGame}  />
                </div>
        </SketchySmallWrapper>
    )
}

export default ExitPrompt