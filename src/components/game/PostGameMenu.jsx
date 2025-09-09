import { useRef } from 'react'

import './PostGameMenu.css'

const PostGameMenu = ({ answer, levelSolved, exitLevel, handlePuzzleEnded, levelEnded}) => {
    const modal = useRef()

    return (
        <>
        <div className='modal'>
            
        </div>
        <dialog className='post-game_menu center' ref={modal}>
            {levelSolved ? <p>The answer is <strong>{answer}</strong>!</p>
                : <p>Try Again</p> }
                <button onClick={() => {
                    if (levelSolved) {
                        handlePuzzleEnded()
                        levelEnded()
                    } else {
                        exitLevel()
                    }
                    modal.current.close()
                }}>'PLAY AGAIN'</button>
        </dialog>
        </>
    )
}

export default PostGameMenu