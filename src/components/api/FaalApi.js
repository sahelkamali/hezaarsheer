import { useEffect, useState } from "react";
import hafezPoems from "../../assets/hafez.json";
import 'whatwg-fetch';
function FaalApi(props) {
    const [titleNumber, settitle] = useState("");
    const [poem, setpoem] = useState([]);
    const [voice, setvoice] = useState("");
    const [Interpretation, setInterpretation] = useState("");
    const changepoem = [];
    useEffect(() => {
        fetch(
            "https://ganjgah.ir/api/ganjoor/hafez/faal")
                        .then((res) => res.json())
                        .then((data) => {
                            const { title, verses, recitations } = data;
                            settitle(title);
                            setvoice(recitations[0].mp3Url);
                            verses.forEach((verse, index) => {
                                if (index % 2 === 0) {
                             return  changepoem.push([verse.text]);
                                }
                                return  changepoem[changepoem.length - 1].push(verse.text);

                            });
                        const poem = changepoem;
                        setpoem(poem);
                        const intr = hafezPoems.find((each) => {
                            for (let i = 0; i < poem.length; i++) {
                                for (let j = 0; j < poem[i].length; j++) {
                                    if (each.poem.includes(poem[i][j])) {
                                        return true;
                                    }
                                }
                            }
                        });
                        const Interpretatin = intr;
                        setInterpretation(Interpretatin.interpretation);
                    })
    }, []);
    return {voice , titleNumber , poem , Interpretation};
}
export default FaalApi;