import styles from "./shaerPage.module.css";
import image4 from "../../assets/image4.png";
import Refresh from "../../assets/refresh.png";
import ShaerApi from "../../components/api/shaerApi";
import { useParams } from "react-router-dom";
// import Sher from "../../components/sher";
function ShaerPage() {
    const { id } = useParams();
    const { name, refresh, image, title, poem,info,} = ShaerApi(id);
    return (
<span>j</span>
        
    );
}

export default ShaerPage;
