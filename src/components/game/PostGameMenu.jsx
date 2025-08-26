import { useRef } from 'react'

import './PostGameMenu.css'

const PostGameMenu = ({ answer, name, handleActivePortal, handleEnteredPortal, reset}) => {
    const modal = useRef()

    return (
        <>
            <div className='post-game_menu-container'>
            
        </div>
        <dialog className='post-game_menu center' ref={modal}>
                <p>The answer is <strong>{answer}</strong>!</p>
                    <button onClick={() => {
                        handleActivePortal(name)
                        handleEnteredPortal()
                        handleLevelSolved()
                        reset()
                        modal.current.close()
                    }}>PLAY AGAIN</button>
            </dialog>
        </>
    )
}

export default PostGameMenu