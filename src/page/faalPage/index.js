import css from "./faalPage.module.css";
import back1 from "../../assets/back1.png";
import FaalBox from "../../components/fallBox";
import Button from "../../components/button";
import {useNavigate } from "react-router-dom";
import { route } from "../../routing/route";

function FaalPage(){
    const { main  } = route;
    const navigate = useNavigate();
    return (
       <div className={css.fullScreen}>
        <div className={css.backYelow}>
            <FaalBox />
            <Button color="gray" title="بازگشت به صفحه اصلی " onClick={() => {navigate(main);}} />
        </div>
       </div> 
    );
}
export default FaalPage;