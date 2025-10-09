import { useContext } from 'react'
import AuthContext from '../../context/AuthContext'
import Copy from '../../assets/images/icons/copy.svg'

import './PlayerId.css'

const PlayerId = () => {
    const auth = useContext(AuthContext)

    const copyId = () => navigator.clipboard.writeText(auth.id)

    return (
        <div className='player_id-container center'>
            <div className='player_id-wrapper center'>
                <div className='player_id center' onClick={copyId}>
                    <p>{auth.id}</p>
                    <img title='Copy to Clipboard' className='player_id_copy' src={Copy} />
                </div>
            </div>
        </div>
    )
}

export default PlayerId