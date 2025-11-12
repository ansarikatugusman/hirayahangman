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
                    <div 
                        className='exit_game_button-wrapper'
                        onClick={() => { 
                                if (tutorialFinished) {
                                    onFailGame(true) 
                                } else {
                                    onTutorialExit()
                                }
                            }}
                    >
                        <SketchedButton
                            text='YES'
                            width='75px' 
                        />
                    </div>
                    
                    <div className='exit_game_button-wrapper' onClick={onCancelExitGame} > 
                        <SketchedButton text='NO' width='75px'/>
                    </div>
                </div>
        </SketchySmallWrapper>
    )
}

export default ExitPrompt