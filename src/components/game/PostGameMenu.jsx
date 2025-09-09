import { useRef } from 'react'

import './PostGameMenu.css'

const PostGameMenu = ({ answer, name, handleActivePortal, gameStarted, handleLevelSolved, reset}) => {
    const modal = useRef()

    return (
        <>
        <div className='modal'>
            
        </div>
        <dialog className='post-game_menu center' ref={modal}>
                <p>The answer is <strong>{answer}</strong>!</p>
                    <button onClick={() => {
                        gameStarted()
                        handleLevelSolved()
                        reset()
                        modal.current.close()
                    }}>PLAY AGAIN</button>
            </dialog>
        </>
    )
}

export default PostGameMenu