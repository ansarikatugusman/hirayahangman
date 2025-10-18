import { useState, useEffect } from 'react'
import CharacterHead from '../assets/images/character_head.png'
import Character from '../assets/images/character.png'
import CharacterConfused from '../assets/images/character_confused.png'
import CharacterExcited from '../assets/images/character_excited.png'
import CharacterSad from '../assets/images/character_sad.png'
import CharacterSmiling from '../assets/images/character_smiling.png'

import './Dialogue.css'

const Dialogue = ({ minimized, top, dialogue, confused, excited, sad, smiling, onDialogueFinish }) => {
    const [visible, setVisible] = useState(true)
    const [dialoguePage, setDialoguePage] = useState(0)
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (currentIndex < dialogue[dialoguePage].text.length) {
            const timeout = setTimeout(() => {
            setCurrentText(prevText => prevText + dialogue[dialoguePage].text[currentIndex]);
            setCurrentIndex(prevIndex => prevIndex + 1);
        }, 20);

            return () => clearTimeout(timeout);
        }
    }, [currentIndex, dialoguePage]);

    const onClickHandler = () => {
        if (dialogue.length - 1 === dialoguePage) {
            setVisible(false)
            onDialogueFinish()
        } else {
            setDialoguePage((prevPage) => prevPage + 1)
            setCurrentText('')
            setCurrentIndex(0)
        }
    }

    return (
        <div className='dialogue-container modal center' style={{ display: visible ? 'flex' : 'none' }} onClick={onClickHandler} >
            {!minimized && 
                <div className='dialogue_character-wrapper ohph'>
                    <img className='dialogue_character' 
                        src={
                                dialogue[dialoguePage].emotion === 'confused' ? CharacterConfused
                                : dialogue[dialoguePage].emotion === 'excited' ? CharacterExcited
                                : dialogue[dialoguePage].emotion === 'sad' ? CharacterSad
                                : dialogue[dialoguePage].emotion === 'smiling' ? CharacterSmiling
                                : Character
                            } 
                    />
                </div>
            }
            <div className={`dialogue_text-wrapper ohpw center ${top && 'dialogue_text-wrapper-top'}`} >
                {minimized &&
                    <div className='dialogue_text_icon-wrapper'>
                        <img className='dialogue_text_icon ' src={CharacterHead} />
                    </div>
                }
                <div className='dialogue_text ohpw center'>
                    <p className='dialogue_text-p'>
                        {currentText}
                    </p>
                </div>
                <div className='dialogue_continue ohpw center'>
                    <p>
                        Click anywhere to continue
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Dialogue