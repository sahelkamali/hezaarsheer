import FaalApi from "../api/FaalApi"; 
import css from "./fallBox.module.css"
function FaalBox(){
    const {titleNumber , poem , Interpretation , voice } = FaalApi();
    return(
        <div>
            <div className={css.top}>
            <div className={css.poemContainer}>
                    <p className={css.title}>{titleNumber}:</p>
                    <div className={css.poem}>
                        {poem.map((couplet, coupletIndex) => {
                            return (
                                <div
                                    key={`couplet-${coupletIndex}`}
                                    className={css.couplet}
                                >
                                    {couplet.map((verse, verseIndex) => {
                                        return (
                                            <div
                                                key={`verse-${coupletIndex}-${verseIndex}`}
                                                className={css.verse}
                                            >
                                                {verse}
                                            </div>
                                        );
                                    })}
                                </div>
                            );
                        })}
                    </div>{" "}
        </div>
            </div>
            <div className={css.bottom}>
                <p>ای صاحب فال:</p>
                {Interpretation}
            </div>

        </div>
    );
}
export default FaalBox;