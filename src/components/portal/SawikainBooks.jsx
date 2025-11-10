import { useMemo } from 'react'
import { Html } from '@react-three/drei'
import SawikainWordBank from '../../utils/SawikainWordBank'
import SwBookOpen from '../../assets/images/sw_book_open.png'
import SwBookClosed from '../../assets/images/sw_book_closed.png'
import SawikainBookOpen from '../../assets/images/sawikain_book_open.png'
import SawikainBookClosed from '../../assets/images/sawikain_book_closed.png'
import Ribbon from '../../assets/images/ribbon.png'

import './SawikainBooks.css'

const SawikainBooks = ({ numberOfBooks = 13, radius = 3, handleCurrentBook, levelStarted, books, currentBook, booksSolved }) => {
    const totalSawikainBooks = SawikainWordBank.easy.length + SawikainWordBank.medium.length + SawikainWordBank.hard.length

    const sawikainBooks = useMemo(() => {
        let sawikain_books = []

        for (let i = 0; i < numberOfBooks; i++) {
            const angle = Math.PI * 2 * i / numberOfBooks

            const x = Math.sin(angle) * radius
            const y = 0.5
            const z = Math.cos(angle) * radius

            if (i === numberOfBooks - 1) {
                sawikain_books.push(
                    <Html
                        className='center'
                        key={i}
                        position-x={x}
                        position-y={y}
                        position-z={z}
                    >
                        <div className='sawikain_book-container center' >
                            <div
                                className='sawikain_book_image-wrapper center'
                                onClick={(e) => {
                                    levelStarted()
                                    handleCurrentBook(e);
                                }}
                                style={{ pointerEvents: booksSolved.length >= 12 ? '' : 'none' }}>
                                <img
                                id='last_book'
                                    className='sawikain_book_image'
                                    src={booksSolved.length >= 12 ? SawikainBookOpen : SawikainBookClosed}
                                />
                            </div>
                            <div 
                                className='sawikain_book_completed-wrapper center'
                            >
                                <div className='sawikain_book_completed'>
                                    { booksSolved.length >= 12 
                                        ? <span>{booksSolved.length} / {totalSawikainBooks}</span>
                                        : <span>{booksSolved.length} / 12</span>
                                    }
                                </div> 
                            </div>
                        </div>
                    </Html>
                )
            } else {
                sawikain_books.push(
                    <Html
                        className='center'
                        key={i}
                        position-x={x}
                        position-y={y}
                        position-z={z}
                    >
                        <div className='sawikain_book-container center'>
                            <div
                                className='sawikain_book_image-wrapper center'
                                onClick={(e) => {
                                    levelStarted()
                                    handleCurrentBook(e);
                                }}
                                style={{ pointerEvents: books[`sawikainBook${i+1}`] === true ? 'none' : '' }}>
                                <img
                                id={Object.keys(books)[i]}
                                    className='sawikain_book_image'
                                    src={books[`sawikainBook${i+1}`] === true ? SwBookClosed : SwBookOpen}
                                />

                                <img
                                    className='sawikain_book_ribbon'
                                    src={Ribbon}
                                    style={{ display: books[`sawikainBook${i+1}`] === true ? 'block' : 'none' }}
                                />
                            </div>
                        </div>
                    </Html>
                )
            }
        }

        return sawikain_books
    }, [books, handleCurrentBook, levelStarted, currentBook])
    
    return (
        <>
            {sawikainBooks}
        </>
    )
}

export default SawikainBooks