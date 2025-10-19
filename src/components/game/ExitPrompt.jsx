import SketchySmallWrapper from '../wrappers/SketchySmallWrapper'
import SketchedButton from '../buttons/SketchedButton'

import './ExitPrompt.css'

const ExitPrompt = ({ tutorialFinished, onTutorialExit, onFailGame, onCancelExitGame }) => {
    return (
        <SketchySmallWrapper>
            { tutorialFinished ? 
                'You already started the game, are you sure you want to exit? There is a penalty for exiting.' :
                `You haven't finsihed the tutorial yet. Are you sure you want to exit?`
            }
                <div className='exit_game_buttons center'>
                    <SketchedButton 
                        text='YES' width='75px' 
                        onClickHandler={() => { 
                            if (tutorialFinished) {
                                onFailGame(true) 
                            } else {
                                onTutorialExit()
                            }
                        }}
                    />
                    <SketchedButton text='NO' width='75px' onClickHandler={onCancelExitGame}  />
                </div>
        </SketchySmallWrapper>
    )
}

export default ExitPrompt