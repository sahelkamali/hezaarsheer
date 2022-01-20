import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useParams } from "react-router-dom";
import Main from "./page/main";
import { route } from "../src/routing/route";
import FaalPage from "./page/faalPage";
import Ganjineh from "./page/ganjineh";
function Routing() {
    const {main , faalPage , ganjineh} = route;

    return (
        
        <BrowserRouter>
        <Routes>
            <Route exact path={main} element={<Main />} />
            <Route exact path={faalPage} element={<FaalPage />} />
            <Route exact path={ganjineh} element={<Ganjineh />} />
        </Routes>
    </BrowserRouter> 
        );
}

export default Routing;