import { useMemo } from 'react'
import { Html } from '@react-three/drei'
import SawikainWordBank from '../../utils/SawikainWordBank'
import Book1Open from '../../assets/images/book1_open.png'
import Book1Closed from '../../assets/images/book1_closed.png'
import Book3Open from '../../assets/images/book3_open.png'
import Book3Closed from '../../assets/images/book3_closed.png'

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
                        <div className='sawikain_book-container center' 
                            style={{ pointerEvents: booksSolved.length === totalSawikainBooks ? 'none' : '' }}
                        >
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
                                    src={booksSolved.length >= 12 ? Book3Open : Book3Closed}
                                />
                            </div>
                            <div 
                                className='sawikain_book_completed-wrapper center'
                                style={{ visibility: booksSolved.length >= 12 ? 'visible' : 'hidden' }}
                            >
                                <div className='sawikain_book_completed'>
                                    <span>{booksSolved.length} / {totalSawikainBooks}</span>
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
                                className='sawikain_book_completed-wrapper center'
                                style={{ visibility: books[`sawikainBook${i+1}`] === true ? 'visible' : 'hidden' }}
                            >
                                <div className='sawikain_book_completed'>
                                    <span>COMPLETED</span>
                                </div> 
                            </div>
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
                                    src={books[`sawikainBook${i+1}`] === true ? Book1Closed : Book1Open}
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