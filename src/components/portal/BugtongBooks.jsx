import { useMemo } from 'react'
import { Html } from '@react-three/drei'
import BugtongBookOpen from '../../assets/books/bugtong_book_open.png'
import BugtongBookClosed from '../../assets/books/bugtong_book_closed.png'

import './BugtongBooks.css'

const BugtongBooks = ({ numberOfBooks = 10, radius = 3, handleCurrentItem, gameStarted, books, currentItem  }) => {

    const bugtongBooks = useMemo(() => {
        let bugtong_books = []

        for (let i = 0; i < numberOfBooks; i++) {
            const angle = Math.PI * 2 * i / numberOfBooks

            const x = Math.sin(angle) * radius
            const y = 0.5
            const z = Math.cos(angle) * radius
            
            //console.log(books[`bugtongBook${i+1}`])

            if (i === numberOfBooks - 1) {
                bugtong_books.push(
                    <Html
                        className='bugtong_book-container center'
                        key={i}
                        position-x={x}
                        position-y={y}
                        position-z={z}
                    >
                        <div className='bugtong_book-wrapper center'>
                            <div 
                                className='bugtong_book_completed-wrapper center'
                                style={{ visibility: books[`bugtongBook${i+1}`] === true ? 'visible' : 'hidden' }}
                            >
                                <div className='bugtong_book_completed'>
                                    <span>COMPLETED</span>
                                </div> 
                            </div>
                            <div
                                className='bugtong_book_image-wrapper center'
                                onClick={(e) => {
                                    gameStarted()
                                    handleCurrentItem(e);
                                }}
                                style={{ pointerEvents: books[`bugtongBook${i+1}`] === true ? 'none' : '' }}>
                                <img
                                id={Object.keys(books)[i]}
                                    className='bugtong_book_image'
                                    src={books[`bugtongBook${i+1}`] === true ? BugtongBookClosed : BugtongBookOpen}
                                />
                            </div>
                        </div>
                    </Html>
                    /*
                    <Html
                        className='bugtong_book-wrapper center'
                        key={i}
                        position-x={x}
                        position-y={y}
                        position-z={z}
                    >
                        <p>Book of Bugtong</p>
                        <img className='bugtong_book_image' src={BugtongBookClosed} />
                        <p></p>
                    </Html>
                    */
                )
            } else {
                //console.log(Object.keys(books)[i])
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
                                className='bugtong_book_completed-wrapper center'
                                style={{ visibility: books[`bugtongBook${i+1}`] === true ? 'visible' : 'hidden' }}
                            >
                                <div className='bugtong_book_completed'>
                                    <span>COMPLETED</span>
                                </div> 
                            </div>
                            <div
                                className='bugtong_book_image-wrapper center'
                                onClick={(e) => {
                                    gameStarted()
                                    handleCurrentItem(e);
                                }}
                                style={{ pointerEvents: books[`bugtongBook${i+1}`] === true ? 'none' : '' }}>
                                <img
                                id={Object.keys(books)[i]}
                                    className='bugtong_book_image'
                                    src={books[`bugtongBook${i+1}`] === true ? BugtongBookClosed : BugtongBookOpen}
                                />
                            </div>
                        </div>
                    </Html>
                )
            
            }
            
        }

        return bugtong_books
    }, [books, handleCurrentItem, gameStarted, currentItem])
    
    return (
        <>
            {bugtongBooks}
        </>
    )
}

export default BugtongBooks