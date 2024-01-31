import NavigationBar from "../components/Page/NavigationBar";
import {Outlet} from 'react-router-dom'
import { useSelector } from "react-redux";

export default function Root(){
    const authenticated = useSelector((state)=>state.auth.authenticated);

    return (
        <>
            {authenticated && <NavigationBar links={[{title: "Chat", path: "/chat"}]}/>}
            <Outlet/>
        </>
    )
}