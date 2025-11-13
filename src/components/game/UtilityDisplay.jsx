import { useState, useEffect, useRef } from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import Tutorial2 from '../tutorials/Tutorial2'
import Tutorial3 from '../tutorials/Tutorial3'
import SketchedButton from '../buttons/SketchedButton'
import PointRight from '../../assets/images/icons/point_right.svg'
import PointLeft from '../../assets/images/icons/point_left.svg'
import Life from '../../assets/images/life.png'

import './UtilityDisplay.css'

const UtilityDisplay = ({ tutorial1, tutorial2, tutorial1Active, tutorial2Active, tutorial3Active, tutorial4Active, tutorial5Active, setTutorial2Active, setTutorial3Active, setCompletedTutorial, timeIsPlaying, timeDuration, lives, setRemainingTimeLeft, levelIsNotSolved, closeDisplayBook, handlePuzzleEnded, onClickExitGame }) => {
    const livesRef = useRef()
    
    const [pastLives, setPastLives] = useState(lives)

    const renderTime = ({ remainingTime }) => {
        if (remainingTime === 0) {
        }
    
        return (
            <div className='time_left-wrapper center'>
                <div className='time_left center'>{remainingTime}</div>
                {tutorial3Active &&
                    <div className='tutorial3_hand'>
                        <img className='tutorial3_hand_icon' src={PointLeft} draggable='false'/>
                    </div>
                }
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
            {tutorial2Active && <Tutorial2 setTutorial2Active={setTutorial2Active} setCompletedTutorial={setCompletedTutorial} />}

            {tutorial3Active && <Tutorial3 setTutorial3Active={setTutorial3Active} setCompletedTutorial={setCompletedTutorial} />}

            <div className='exit_button-wrapper center' onClick={onClickExitGame}>
                <div className='exit_button center' onClick={onClickExitGame}>
                    <SketchedButton text='EXIT' width='100px' onClickHandler={onClickExitGame} />
                </div>
            </div>
            <div className='countdown_timer-wrapper center' style={{ zIndex: tutorial3Active && '20' }}>
                {tutorial2 &&
                    <CountdownCircleTimer 
                        size={65}
                        strokeWidth={7.5}
                        isPlaying={!tutorial1Active && !tutorial2Active && !tutorial3Active && !tutorial4Active && !tutorial5Active && timeIsPlaying}
                        duration={timeDuration}
                        isSmoothColorTransition={true}
                        colors={['#004777', '#008000', '#ffff00', '#ffa500', '#ff0000']}
                        colorsTime={[15, 10, 5, 2.5, 0]}
                        onUpdate={(remainingTime) => {setRemainingTimeLeft(remainingTime)}}
                        onComplete={() => {
                            closeDisplayBook()
                            levelIsNotSolved()
                            handlePuzzleEnded()
                        }}
                    >
                        {renderTime}
                    </CountdownCircleTimer>
                }
            </div>
            <div className='lives-wrapper center' style={{ visibility: tutorial1 ? 'visible' : 'hidden' }}>
                {tutorial1 &&
                    <div 
                        className='life-wrapper center' 
                        ref={livesRef}
                        style={{ zIndex: tutorial2Active && '20' }}
                    >
                        <img className='life' src={Life} draggable='false' />
                        <p className='lives_left'>{lives}</p>

                        {tutorial2Active &&
                            <div className='tutorial2_hand'>
                                <img className='tutorial2_hand_icon' src={PointRight} draggable='false' />
                            </div>
                        }
                    </div>
                }
            </div>
        </div>
    )
}

export default UtilityDisplay