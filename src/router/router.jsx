import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "../pages/details/detail";
import Home from "../pages/home/Home"

export function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />}/>
                <Route path="/detail" element={<Detail />}/>
                <Route path="*" element={<div><h1>ERROR 404</h1></div>}/>
            </Routes>
        </BrowserRouter>
    )
}