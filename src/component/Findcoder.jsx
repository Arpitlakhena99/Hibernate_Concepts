import Btn from "./Btn"
import Logo from "./Logo"
import Menu from "./Menu"
import style from "./findcoder.module.css"

const Findcoder=()=>{
    return(
        <div  id={style.navbar}>
            <article>
                <div id={style.Logo}><Logo/></div>
                <div id={style.Menu}><Menu/></div>
                <div id={style.Btn}><Btn/></div>
            </article>
        </div>
    )
}
export default Findcoder