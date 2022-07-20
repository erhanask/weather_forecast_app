import {useContext} from "react";

import {ThemeContext} from "../context/ThemeContext";
import {ContentContext, ContentProvider} from "../context/ContentContext";

import Content from "./Content";
import CityList from "./CityList";
function Container() {

    const data = useContext(ThemeContext);
    // const weatherInfos = useContext(ContentContext);

    return (
        <div className={`app ${data.theme === "light" ? "light" : "dark"}`}>
            <ContentProvider>
            <CityList></CityList>
            <Content></Content>
            </ContentProvider>
        </div>
    );
}

export default Container;
