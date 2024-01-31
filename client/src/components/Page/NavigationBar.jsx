import { Link } from "react-router-dom";


export default function NavigationBar({links}){
    return (
        <nav>
            <ul>
                {links.map((link)=><ul><Link to={link.path}>{link.title}</Link></ul>)}
            </ul>
        </nav>
    )
}