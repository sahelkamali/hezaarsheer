import css from "./main.module.css";
import Header from "../../components/header"; 
import image2 from "../../assets/image2.png";
import image5 from "../../assets/image5.png";
import Button from "../../components/button";
import { route } from "../../routing/route";
import {useNavigate } from "react-router-dom";

function Main(){
    const { main , faalPage , ganjineh } = route;
    const navigate = useNavigate();

return (
    <div className={css.fullscreen}>
    <div>
        <Header />
    </div>
    <img className={css.image2} src={image2}/>
    <div className={css.right}>
    <div className={css.image}>
                 <img   src={image5}/>
                </div>
                <div className={css.text}>
                <p>
                            تاریخ کهن ایران زمین با پیشینه ای غنی از فرهنگ و
                            هنر، از دیرباز با شعر و ادبیات درهم پیچیده و ایران،
                            مهد پرورش شاعران بزرگی بوده و در گیر و دار فراز و
                            نشیب هایی که در طول تاریخ بر آن گذشته، اما شاهنامه
                            وزین پارسی پرور فردوسی بزرگ، اشعار روح بخش مولانا و
                            عشق بازی اش با حق، غزل های عاشقانه و عارفانه عالم
                            گیر در دیوان حافظ، اندیشه ژرف و عرفان ناب عطار
                            نیشابوری همه و همه همچون مرهمی بر زخم های کوچک و
                            بزرگش تسکین داده اند.
                        </p>
                        <Button color="yellow" title="فال حافظ" onClick={() => {navigate(faalPage);}} />
                        <Button color="yellow" title="گنجینه اشعار" onClick={() => {navigate(ganjineh);}} />

                </div>
    </div>
</div>
);
}
export default Main;