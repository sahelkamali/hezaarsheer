import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useParams } from "react-router-dom";
import Main from "../page/main";
import { route } from "../route";
function Routing() {
    const {main} = route;

    return (
        <BrowserRouter>
        <Routes>
            <Route exact path={main} element={<Main />} />

        </Routes>
    </BrowserRouter>  
        );
}

export default Routing;