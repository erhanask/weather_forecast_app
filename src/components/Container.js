import {useContext} from "react";

import {ThemeContext} from "../context/ThemeContext";
import Content from "./Content";
import CityList from "./CityList";
function Container() {

    const data = useContext(ThemeContext);

    return (
        <div className={`app ${data.theme === "light" ? "light" : "dark"}`}>
            <CityList></CityList>
            <Content></Content>
        </div>
    );
}

export default Container;
