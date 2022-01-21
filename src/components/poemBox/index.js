import css from "./poemBox.module.css"
function PoemBox(props){
    const {title , poem , image} = props;
return(
<div className={css.container}>
    <img className={css.imgInfo} src={image}/>
    <div className={css.title}>{title}</div>
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

    );
} export default PoemBox;