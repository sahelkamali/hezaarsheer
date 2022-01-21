import { useEffect, useState , useCallback } from "react";
import hafezPoems from "../../assets/hafez.json";
import 'whatwg-fetch';
import { Getpoet } from "../../getpoat";
function ShaerApi(id) {
    const [name, setName] = useState("");
    const [info, setinfo] = useState("");
    const [image, setImage] = useState("");
    const [title, setTitle] = useState("");
    const [poem, setpoem] = useState([]);
    const [refreshing, setRefresh] = useState(true);
    const changepoem = [];

    useEffect(() => {
        fetch(`https://ganjgah.ir/api/ganjoor/poet/${id}`)
                        .then((res) => res.json())
                        .then((data) => {
                            const { poet: { nickname, description, imageUrl },} = data;
                            setImage(`https://ganjgah.ir${imageUrl}`);
                            setName(nickname);
                            setinfo(description);
                                                })
    }, [id]);
    useEffect(() => {
        if (refreshing) {
            fetch(
                `https://ganjgah.ir/api/ganjoor/poem/random?poetId=${id}`)
                            .then((res) => res.json())
                            .then((data) => {
                                const { title, verses } = data;

                                setTitle(title);
                                verses.forEach((verse, index) => {
                                    if (index % 2 === 0) {
                                 return  changepoem.push([verse.text]);
                                    }
                                    return  changepoem[changepoem.length - 1].push(verse.text);
                                });
                              const poem = changepoem;
                              setpoem(poem);
                                setRefresh(false);
                                                  
                            })
        }
    }, [id, refreshing]);
    const refresh = useCallback(() => {
        setpoem([]);
        setTitle("");
        setRefresh(true);
    }, []);
    return {
        name,
        info,
        image,
        title,
        poem,
        refresh,
    };

}
export default ShaerApi;