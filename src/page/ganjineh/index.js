import css from "./ganjineh.module.css"
import Slider from "../../components/slider";
import PoetApi from "../../components/api/PoetApi";
import image1 from "../../assets/image1.png";
import image3 from "../../assets/image3.png";

function Ganjineh(){
    const {poets} = PoetApi();
    return(
    
<div>
<div className={css.imageBack}>
    <img src={image1} style={{height:'100%'}} />
</div>
<div className={css.rightYellow}>
    <img src={image3} />
</div>
<div className={css.leftBlue}></div>
<div className={css.slidercontainer}>
<Slider poets={poets} />

</div>
</div>    
);
}
export default Ganjineh;