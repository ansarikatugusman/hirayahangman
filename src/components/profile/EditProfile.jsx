import { useState, useContext } from 'react'
import AuthContext from '../../context/AuthContext'
import useHttpRequest from '../../hooks/useHttpRequest'
import Loading from '../../utils/Loading'
import ErrorMessage from '../../utils/ErrorMessage'
import SketchyLongWrapper from '../wrappers/SketchyLongWrapper'
import Save from '../../assets/images/icons/save.svg'

import './EditProfile.css'

const EditProfile = ({ name, avatar, avatars, setName, setAvatar, closeEditProfileDialog }) => {
    const [newName, setNewName] = useState(name)
    const [newAvatar, setNewAvatar] = useState(avatar)
    const [showError, setShowError] = useState(false)
    const {loading, error, fetchRequest} = useHttpRequest()

    const auth = useContext(AuthContext)

    const onNameChange = (e) => setNewName(e.target.value)

    const onAvatarChange = (avatar) => setNewAvatar(avatar) 

    const avatarCollection = avatars.map( avatar =>
        <div className='avatar_collection-wrapper center' key={avatar}>
            <img className='edit_profile_avatar' src={`./avatars/${avatar}.svg`} alt='avatar' onClick={() => onAvatarChange(avatar)} />
        </div>
    )

    const onSave = async () => {
        try {
            await fetchRequest(`${import.meta.env.VITE_BACKEND_URL}/editProfile`,
            'PATCH',
            { 
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + auth.token 
            },
            JSON.stringify({
                newName: newName,
                newAvatar: newAvatar
            })
            )
            setName(newName)
            setAvatar(newAvatar)
        } catch (err) {
            setShowError(true)
        }
    }

    return (
        <SketchyLongWrapper onCloseHandler={closeEditProfileDialog}>
            {loading && <Loading />}
            {showError && <ErrorMessage error={error} setShowError={setShowError} />}
            <div className='edit_profile-container ohp center'>
                <div className='edit_profile_details-wrapper center'>
                    <div className='edit_profile_details center'>
                        <div className='edit_profile_avatar-wrapper center'>
                            <img className='edit_profile_avatar' src={`./avatars/${newAvatar}.svg`} ></img>
                        </div>
                        <div className='edit_profile_name-wrapper'>
                            <p className='edit_profile_name'>
                                {newName}
                            </p>
                        </div>
                    </div>
                    <div className='edit_profile_name_change center'>
                        <div className='edit_profile_new_name-wrapper'>
                            <label className='edit_profile_new_name_label' htmlFor='new_name' >Name: </label>
                            <input className='edit_profile_new_name' type='text' name='new_name' placeholder='Enter new name...' minLength={1} value={newName} onChange={onNameChange} />
                        </div>
                        <div title='Save Profile' className='edit_profile_save center' onClick={onSave}>
                            <img className='edit_profile_save_icon' src={Save} />
                            <p>SAVE</p>
                        </div>
                    </div>
                </div>

                <div className='avatars-container ohpw center'>
                    {avatarCollection}
                </div>
            </div>
        </SketchyLongWrapper>
    )
}

export default EditProfile