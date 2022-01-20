import { useEffect, useState } from "react";
import hafezPoems from "../../assets/hafez.json";
import 'whatwg-fetch';
import { Getpoet } from "../../getpoat";
function PoetApi() {
    const [poets, setPoets] = useState([]);

    useEffect(() => {
        fetch(
            "https://ganjgah.ir/api/ganjoor/poets")
                        .then((res) => res.json())
                        .then((data) => {
                            setPoets(Getpoet(data));
                        })
    }, []);
    return { poets };
}
export default PoetApi;