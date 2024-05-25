import { Link } from "react-router-dom"
import style from "./crud.module.css"
import axios from "axios"

const Crud=()=>{
    
    return(
        <div id={style.nav}>
            <Link to="/Create_user">CREATE USER</Link>
            <Link to="/user">USERS</Link>
        </div>
    )
}
export default Crud