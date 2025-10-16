import { useMemo } from 'react'
import { Html } from '@react-three/drei'
import SalawikainWordBank from '../../utils/SalawikainWordBank'
import Book1Open from '../../assets/images/book1_open.png'
import Book1Closed from '../../assets/images/book1_closed.png'
import Book4Open from '../../assets/images/book4_open.png'
import Book4Closed from '../../assets/images/book4_closed.png'

import './SalawikainBooks.css'

const SalawikainBooks = ({ numberOfBooks = 16, radius = 3, handleCurrentBook, levelStarted, books, currentBook, booksSolved }) => {
    const totalSalawikainBooks = SalawikainWordBank.easy.length + SalawikainWordBank.medium.length + SalawikainWordBank.hard.length

    const salawikainBooks = useMemo(() => {
        let salawikain_books = []

        for (let i = 0; i < numberOfBooks; i++) {
            const angle = Math.PI * 2 * i / numberOfBooks

            const x = Math.sin(angle) * radius
            const y = 0.5
            const z = Math.cos(angle) * radius

            if (i === numberOfBooks - 1) {
                salawikain_books.push(
                    <Html
                        className='center'
                        key={i}
                        position-x={x}
                        position-y={y}
                        position-z={z}
                    >
                        <div className='salawikain_book-container center' 
                            style={{ pointerEvents: booksSolved.length === totalSalawikainBooks ? 'none' : '' }}
                        >
                            <div
                                className='salawikain_book_image-wrapper center'
                                onClick={(e) => {
                                    levelStarted()
                                    handleCurrentBook(e);
                                }}
                                style={{ pointerEvents: booksSolved.length >= 15 ? '' : 'none' }}>
                                <img
                                id='last_book'
                                    className='salawikain_book_image'
                                    src={booksSolved.length >= 15 ? Book4Open : Book4Closed}
                                />
                            </div>
                            <div 
                                className='salawikain_book_completed-wrapper center'
                                style={{ visibility: booksSolved.length >= 15 ? 'visible' : 'hidden' }}
                            >
                                <div className='salawikain_book_completed'>
                                    <span>{booksSolved.length} / {totalSalawikainBooks}</span>
                                </div> 
                            </div>
                        </div>
                    </Html>
                )
            } else {
                salawikain_books.push(
                    <Html
                        className='center'
                        key={i}
                        position-x={x}
                        position-y={y}
                        position-z={z}
                    >
                        <div className='salawikain_book-container center'>
                            <div 
                                className='salawikain_book_completed-wrapper center'
                                style={{ visibility: books[`salawikainBook${i+1}`] === true ? 'visible' : 'hidden' }}
                            >
                                <div className='salawikain_book_completed'>
                                    <span>COMPLETED</span>
                                </div> 
                            </div>
                            <div
                                className='salawikain_book_image-wrapper center'
                                onClick={(e) => {
                                    levelStarted()
                                    handleCurrentBook(e);
                                }}
                                style={{ pointerEvents: books[`salawikainBook${i+1}`] === true ? 'none' : '' }}>
                                <img
                                id={Object.keys(books)[i]}
                                    className='salawikain_book_image'
                                    src={books[`salawikainBook${i+1}`] === true ? Book1Closed : Book1Open}
                                />
                            </div>
                        </div>
                    </Html>
                )
            }
        }

        return salawikain_books
    }, [books, handleCurrentBook, levelStarted, currentBook])
    
    return (
        <>
            {salawikainBooks}
        </>
    )
}

export default SalawikainBooks