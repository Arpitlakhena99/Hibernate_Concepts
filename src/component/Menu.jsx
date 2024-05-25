import { Link } from "react-router-dom"
import style from "./findcoder.module.css"
const Menu=()=>{
    return(
        <div id={style.menublock}>
            <Link to="/explore">Explore Work</Link>
            <Link to="/hire">Hire Talents</Link>
            <Link to="/dev">Dev board</Link>
            <Link to="/challenges">Challenges</Link>
        </div>
    )
}
export default Menu