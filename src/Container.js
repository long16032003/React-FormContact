import TopMenu from "./component/TopMenu/TopMenu"
import Nav from "./component/nav/Nav"
import Slider from "./component/silder/Slider"

import { Outlet } from "react-router-dom";

function Container() {
    return (
        <>
            <TopMenu/>
            <Nav/>
            <Slider/>
            <Outlet />
        </>
    )
}

export default Container;