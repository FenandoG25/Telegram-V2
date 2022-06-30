import { Avatar } from '@material-ui/core'
import React, { forwardRef } from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/counter/userSlice'
import './Mensajes.css'

const Mensajes = forwardRef(({
    id, data: {
            timestamp,
            displayName,
            email,
            message,
            photo,
            uid
    }
}, ref) => {

    const user = useSelector(selectUser)

    return (
        <div ref = {ref} className = {`message ${user.email === email && `message__sender`}`}
            >
                <Avatar
                    src = {photo}
                    className = "message__photo"
                />
                <div className = "message__contents">
                <p className = "message__content1">{displayName}</p>
                    <p className = "message__content">{message}</p>
                    <small className = "message__timestamp">{new Date(timestamp?.toDate()).toLocaleString('es-US')}</small>
                </div>
        </div>
    )
})

export default Mensajes
