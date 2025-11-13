import { useMemo } from 'react'
import { Html } from '@react-three/drei'
import BugtongWordBank from '../../utils/BugtongWordBank'
import BgBookOpen from '../../assets/images/bg_book_open.png'
import BgBookClosed from '../../assets/images/bg_book_closed.png'
import BugtongBookOpen from '../../assets/images/bugtong_book_open.png'
import BugtongBookClosed from '../../assets/images/bugtong_book_closed.png'
import Ribbon from '../../assets/images/ribbon.png'

import './BugtongBooks.css'

const BugtongBooks = ({ numberOfBooks = 11, radius = 3, handleCurrentBook, levelStarted, books, currentBook, booksSolved }) => {
    const totalBugtongBooks = BugtongWordBank.easy.length + BugtongWordBank.medium.length + BugtongWordBank.hard.length

    const bugtongBooks = useMemo(() => {
        let bugtong_books = []

        for (let i = 0; i < numberOfBooks; i++) {
            const angle = Math.PI * 2 * i / numberOfBooks

            const x = Math.sin(angle) * radius
            const y = 0.55
            const z = Math.cos(angle) * radius

            if (i === numberOfBooks - 1) {
                bugtong_books.push(
                    <Html
                        className='center'
                        key={i}
                        position-x={x}
                        position-y={y}
                        position-z={z}
                    >
                        <div className='bugtong_book-container center' >
                            <div
                                className='bugtong_book_image-wrapper center'
                                onClick={(e) => {
                                    levelStarted()
                                    handleCurrentBook(e);
                                }}
                                style={{ pointerEvents: booksSolved.length >= 10 ? '' : 'none' }}>
                                <img
                                    id='last_book'
                                    className='bugtong_book_image'
                                    src={booksSolved.length >= 10 ? BugtongBookOpen : BugtongBookClosed}
                                    draggable='false'
                                />
                            </div>
                            <div 
                                className='bugtong_book_completed-wrapper center'
                            >
                                <div className='bugtong_book_completed'>
                                    { booksSolved.length >= 10 
                                        ? <span>{booksSolved.length} / {totalBugtongBooks}</span>
                                        : <span>{booksSolved.length} / 10</span>
                                    }
                                </div> 
                            </div>
                        </div>
                    </Html>
                )
            } else {
                bugtong_books.push(
                    <Html
                        className='center'
                        key={i}
                        position-x={x}
                        position-y={y}
                        position-z={z}
                    >
                        <div className='bugtong_book-container center'>
                            <div
                                className='bugtong_book_image-wrapper center'
                                onClick={(e) => {
                                    levelStarted()
                                    handleCurrentBook(e);
                                }}
                                style={{ pointerEvents: books[`bugtongBook${i+1}`] === true ? 'none' : '' }}>
                                <img
                                    id={Object.keys(books)[i]}
                                    className='bugtong_book_image'
                                    src={books[`bugtongBook${i+1}`] === true ? BgBookClosed : BgBookOpen}
                                    draggable='false'
                                />
                                
                                <img
                                    className='bugtong_book_ribbon'
                                    src={Ribbon}
                                    style={{ display: books[`bugtongBook${i+1}`] === true ? 'block' : 'none' }}
                                    draggable='false'
                                />
                            </div>
                        </div>
                    </Html>
                )
            }
        }

        return bugtong_books
    }, [books, handleCurrentBook, levelStarted, currentBook])
    
    return (
        <>
            {bugtongBooks}
        </>
    )
}

export default BugtongBooks