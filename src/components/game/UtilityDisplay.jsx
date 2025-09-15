import { useState, useEffect, useRef, use } from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import SketchedButton from '../buttons/SketchedButton';
import Life from '../../assets/images/life.png'

import './UtilityDisplay.css'

const UtilityDisplay = ({ timeIsPlaying, lives, exitLevel, levelIsNotSolved, closeDisplayBook, handlePuzzleEnded }) => {
    const livesRef = useRef()
    const [pastLives, setPastLives] = useState(lives)

    const renderTime = ({ remainingTime }) => {
        if (remainingTime === 0) {
        }
    
        return (
            <div className="time_left-wrapper center">
                <div className="time_left center">{remainingTime}</div>
            </div>
        )
    }

    useEffect(() => {
        if (pastLives < lives) {
            livesRef.current.style.animation = 'animateAddLife 0.5s'
            setPastLives(pastLives => ++pastLives)
        } else if (pastLives > lives) {
            livesRef.current.style.animation = 'animateSubtractLife 0.5s'
            setPastLives(pastLives => --pastLives)
        }
        setTimeout(() => {
            livesRef.current.style.animation = 'none'
        }, [200])
    }, [lives])

    return (
        <div className='utility_display-container center'>
            <div className='exit_button-wrapper center' onClick={exitLevel}>
                <div className='exit_button center' onClick={exitLevel}>
                    <SketchedButton text='EXIT' width='100px' onClickHandler={exitLevel} />
                </div>
            </div>
            <div className='countdown_timer-wrapper center'>
                <CountdownCircleTimer 
                    size={65}
                    strokeWidth={7.5}
                    isPlaying={timeIsPlaying}
                    duration={60.2}
                    isSmoothColorTransition={true}
                    colors={['#004777', '#008000', '#ffff00', '#ffa500', '#ff0000']}
                    colorsTime={[15, 10, 5, 2.5, 0]}
                    onComplete={() => {
                        closeDisplayBook()
                        levelIsNotSolved()
                        handlePuzzleEnded()
                    }}
                >
                    {renderTime}
                </CountdownCircleTimer>
            </div>
            <div className='lives-wrapper center'>
                <div className='life-wrapper center' ref={livesRef}>
                    <img className='life' src={Life} />
                    <p className='lives_left'>{lives}</p>
                </div>
            </div>
        </div>
    )
}

export default UtilityDisplay