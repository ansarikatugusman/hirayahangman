import './PostGameMenu.css'

const PostGameMenu = ({ answer, setGameFinished }) => {
    return (
        <dialog className='post-game_menu center' open>
            <p>The answer is <strong>{answer}</strong>!</p>
            <p>Thank you for playing!</p>
            <form method="dialog">
                <button onClick={() => setGameFinished(false)}>PLAY AGAIN</button>
            </form>
        </dialog>
    )
}

export default PostGameMenu