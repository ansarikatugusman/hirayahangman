import { useState, useEffect } from 'react'
import CharacterHead from '../assets/images/character_head.png'
import Character from '../assets/images/character.png'
import CharacterConfused from '../assets/images/character_confused.png'
import CharacterExcited from '../assets/images/character_excited.png'
import CharacterSad from '../assets/images/character_sad.png'
import CharacterSmiling from '../assets/images/character_smiling.png'
import CharacterPointing from '../assets/images/character_pointing.png'
import CharacterBookGlowing from '../assets/images/character_book_glowing.png'

import './Dialogue.css'

const Dialogue = ({ minimized, top, dialogue, onDialogueFinish }) => {
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
                    {dialogue[dialoguePage].character ===  'maku-atag' && <img className='dialogue_character' 
                        src={
                                dialogue[dialoguePage].emotion === 'confused' ? CharacterConfused
                                : dialogue[dialoguePage].emotion === 'excited' ? CharacterExcited
                                : dialogue[dialoguePage].emotion === 'sad' ? CharacterSad
                                : dialogue[dialoguePage].emotion === 'smiling' ? CharacterSmiling
                                : dialogue[dialoguePage].emotion === 'pointing' ? CharacterPointing
                                : dialogue[dialoguePage].emotion === 'book_glowing' ? CharacterBookGlowing
                                : Character
                            } 
                        draggable='false'
                    />}
                </div>
            }
            <div className={`dialogue_text-wrapper ohpw center ${top && 'dialogue_text-wrapper-top'}`} >
                {minimized &&
                    <div className='dialogue_text_icon-wrapper'>
                        <img className='dialogue_text_icon ' src={CharacterHead} draggable='false' />
                    </div>
                }
                <div className='dialogue_text ohpw center'>
                    <p 
                        className='dialogue_text-p' 
                        style={{ 
                            color: dialogue[dialoguePage].fontColor ? dialogue[dialoguePage].fontColor : 'black',
                            textShadow: dialogue[dialoguePage].textShadow ? dialogue[dialoguePage].textShadow : 'none',
                            fontFamily: dialogue[dialoguePage].fontFamily === 'italic' ? `'Nunito-Italic', serif` : `'Nunito-Regular', serif`
                        }}
                    >
                        {currentText}
                    </p>
                </div>
                <div className='dialogue_continue-wrapper ohpw center'>
                    <p>
                        Click anywhere to continue
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Dialogue