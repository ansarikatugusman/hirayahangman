import { useState, useRef, useEffect } from 'react'
import SketchedButton from '../buttons/SketchedButton'
import Gold from '../../assets/images/gold.png'
import Crown from '../../assets/images/crown.png'
import ChestClosed from '../../assets/images/chest_closed.png'
import ChestOpen from '../../assets/images/chest_open.png'
import ChestEmpty from '../../assets/images/chest_empty.png'

import './EndGame.css'

const EndGame = ({ tutorialFinished, tutorialCompleted, answer, gameCompleted, onFailGame, crownsPenalty, goldReward, crownsReward, levelSolved, exitLevel, handlePuzzleEnded, levelEnded}) => {
    const [chestEmpty, setEmpty] = useState(false)
    const modal = useRef()

    const collectChest = () => {
        setEmpty(true)
    }

    useEffect(() => {
        if (levelSolved && !tutorialFinished) {
            tutorialCompleted()
        }
        if (levelSolved && tutorialFinished) {
            gameCompleted()
        } else {
            onFailGame()
        } 
    }, [])

    const onExitHandler = () => {
        if (levelSolved) {
            handlePuzzleEnded()
            levelEnded()
        } else {
            exitLevel()
        }
        modal.current.close()
    }

    return (
        <div className='end_game-container modal'>
            <dialog className='end_game center' ref={modal}>
                <div className='end_game_content-wrapper center ohp' style={{ display: levelSolved ? 'none' : 'flex' }}>
                    <div className='end_game_message-wrapper ohpw center'>
                        <p>Try Again</p>
                    </div>
                    <div className='end_game_remarks-wrapper ohpw center'>
                        <p>Solve the level to get the reward from the chest.</p>
                    </div>
                    <div className='chest_wrapper ohpw center'>
                        <img className='chest_empty' src={ChestClosed} onClick={collectChest} />
                    </div>
                    <div className='end_game_results-wrapper ohpw center' >
                        <div className='end_game_results_crown_penalty-wrapper ohpw center'>
                            {tutorialFinished && <img className='end_game_crown_icon' src={Crown}/>}
                            {tutorialFinished && <p>{crownsPenalty()}</p>}
                            {!tutorialFinished && <p>Try again. You can do it.</p>}
                        </div>
                    </div>
                    <div className='end_game_exit_button-wrapper ohpw center'>
                        <div className='end_game_exit_button wrapper center' onClick={onExitHandler}>
                            <SketchedButton width='9rem' text='EXIT' onClickHandler={onExitHandler} />
                        </div>
                    </div>
                </div>

                <div className='end_game_content-wrapper center ohp' style={{ display: levelSolved ? 'flex' : 'none' }}>
                    <div className='end_game_message-wrapper ohpw center'>
                        <p>Well Done!</p>
                    </div>
                    <div className='end_game_remarks-wrapper ohpw center'>
                        <div className='end_game_remarks_chest_open-wrapper ohpw center' style={{ display: chestEmpty ? 'none' : 'flex' }}>
                            <p>The answer is <span>{answer}</span>.</p>
                        </div>
                        <div className='end_game_remarks_chest_empty-wrapper ohpw center' style={{ display: chestEmpty ? 'flex' : 'none' }}>
                            <img className='end_game_gold_icon' src={Gold}/>
                            <p>+{goldReward()}</p>
                        </div>
                    </div>
                    <div className='chest_wrapper ohpw center'>
                        <img className={`${chestEmpty ? 'chest_empty' : 'chest'}`} src={!chestEmpty ? ChestOpen : ChestEmpty} onClick={collectChest} />
                    </div>
                    <div className='end_game_results-wrapper ohpw center' >
                         <div className='end_game_results_crown_penalty-wrapper ohpw center' style={{ display: chestEmpty ? 'flex' : 'none' }}>
                            <img className='end_game_crown_icon' src={Crown}/>
                            <p>{crownsReward() > 0 ? `+${crownsReward()}`: crownsReward()}</p>
                        </div>
                        <div className='end_game_results_chest_open-wrapper center' style={{ display: chestEmpty ? 'none' : 'flex' }}>
                            <p>Click the chest to claim reward.</p>
                        </div>

                        <div style={{ display: chestEmpty ? 'flex' : 'none' }}>
                        </div>
                    </div>
                    <div className='end_game_exit_button-wrapper ohpw center'>
                        <div className='end_game_exit_button wrapper center' style={{ display: chestEmpty ? 'flex' : 'none' }} onClick={onExitHandler}>
                            <SketchedButton width='9rem' text='EXIT' onClickHandler={onExitHandler} />
                        </div>
                    </div>
                </div>
            </dialog>
            <div className='end_game-back'></div>
        </div>
    )
}

export default EndGame