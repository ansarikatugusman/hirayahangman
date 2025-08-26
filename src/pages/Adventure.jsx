import { Link } from 'react-router'
import FoldedButton from '../components/buttons/FoldedButton'

import './Adventure.css'

const Adventure = () => {
    return (
        <div className='adventure-container center ohpw'>
            <div className='bugtong_button-container'>
                <Link className='link_href' to='adventure/bugtong'>
                    <FoldedButton text='BUGTONG' fontsize='150%' scale={true} />
                </Link>
            </div>
            <div className='salawikain_button-container'>
                <Link className='link_href' to='salawikain'>
                    <FoldedButton text='SALAWIKAIN' fontsize='140%' scale={true} />
                </Link>
            </div>
            <div className='sawikain_button-container'>
                <Link className='link_href' to='sawikain'>
                    <FoldedButton text='SAWIKAIN' fontsize='150%' scale={true} />
                </Link>
            </div>
            <div className='return_button-container'>
                <Link className='link_href' to='../play'>
                    <FoldedButton text='RETURN' fontsize='150%' scale={true} />
                </Link>
            </div>
        </div>
    )
}

export default Adventure