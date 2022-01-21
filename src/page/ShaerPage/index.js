import css from "./shaerPage.module.css"
import image4 from "../../assets/image4.png";
import refreshimg from "../../assets/refresh.png";
import ShaerApi from "../../components/api/shaerApi";
import { useParams } from "react-router-dom";
import PoemBox from "../../components/poemBox";
// import Sher from "../../components/sher";
function ShaerPage() {
    const { id } = useParams();
    const { name, refresh, image, title, poem,info,} = ShaerApi(id);
    return (
<div>
<img src={refreshimg}/>
<div className={css.leftYellow}>
<PoemBox title={title} image={image} poem={poem} />
</div>
<div className={css.rightBlue}>
jj
</div>
</div>
        );
}

export default ShaerPage;
