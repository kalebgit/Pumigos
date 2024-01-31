import { useParams } from "react-router-dom"
import {useEffect} from 'react'


export default function Chat(){
    let dummyChats;
    useEffect(()=>{
        dummyChats = [{user: "Juanito", room: "room-1"},
        {user: "Gio", room: "room-2"},
        {user: "Karla", room: "room-3"}]

        return ()=>{

        }
    })

    const params = useParams()
    
    const {room} = params;
    return (
        <>
            <h2>Chats</h2>
            {dummyChats.map((chat)=><li><Link to={`/chats/${chat.room}`}></Link></li>)}
        </>
    )
}