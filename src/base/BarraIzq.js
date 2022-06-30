import React, {useEffect, useState} from 'react'
import './BarraIzq.css'
import SearchIcon from '@material-ui/icons/Search'
import BorderColorOutlinedIcon from '@material-ui/icons/BorderColorOutlined'
import { Avatar, IconButton } from '@material-ui/core'
import BarraDer from './BarraDer'
import SettingsIcon from '@material-ui/icons/Settings'
import db, { auth } from '../firebase'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/counter/userSlice'

const BarraIzq = () => {

    const user = useSelector(selectUser)
    const[mensajes, setThreads] = useState([]);

    useEffect(() =>{
        db.collection('mensajes').onSnapshot((snapshot) =>
            setThreads(snapshot.docs.map((doc) =>({
                id: doc.id,
                data: doc.data()
            })))
        )
    }, [])

    const addThread = () =>{
        const threadName = prompt('Crear un nuevo chat')
        db.collection('mensajes').add({
            threadName: threadName,
        })
    }

    return (
        <div className = "sidebar">
            <div className = "sidebar__header">
                <div className = "sidebar__search">
                    <SearchIcon className = "sidebar__searchIcon" />
                    <input placeholder = "Buscar" className = "sidebar__input"/>
                </div>
                <IconButton variant = "outlined" id = "sidebar__button">
                    <BorderColorOutlinedIcon onClick = {addThread}/>
                </IconButton>
            </div>
            <div className = "sidebar__threads">
                { mensajes.map(({id, data: {threadName}}) => (
                    <BarraDer
                        key = {id}
                        id = {id}
                        threadName = {threadName}
                    />
                ))}
            </div>
            <div className = "sidebar__bottom">
                <Avatar
                    src = {user.photo}
                    className = "sidebar__bottom_avatar"
                    onClick = {() => auth.signOut()}
                />
                <IconButton>
                    <SettingsIcon />
                </IconButton>
            </div>
        </div>
    )
}

export default BarraIzq
