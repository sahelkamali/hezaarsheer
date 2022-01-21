import Main from "../../page/main";
import css from "./header.module.css"
import logo from "../../assets/logo.png";

function Header(){
return (
<div>
    <nav>
        <img className={css.logoGanjoor} src={logo}/>
        <ul>
            <li><a href="/faalPage">فال حافظ</a></li>
            <li><a href="/ganjineh">گنجینه اشعار</a></li>
            <li><a href="/">درباره ما</a></li>
        </ul>
    </nav>
</div>
    );
}
export default Header;