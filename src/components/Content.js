import {useContext} from "react";
import {ThemeContext} from "../context/ThemeContext";
import {ContentContext} from "../context/ContentContext";

function Content() {
    const data = useContext(ThemeContext);
    const content = useContext(ContentContext);

    return (
        <div className={`daysListWrapper`}>
            <ul className={`daysList`}>
                <li className={`activeDay`}>
                    <div>Monday</div>
                    <div>image</div>
                    <div>20C</div>
                </li>
                <li>
                    <div>Tuesday</div>
                    <div>image</div>
                    <div>20C</div>
                </li>
                <li>
                    <div>Sunday</div>
                    <div>image</div>
                    <div>20C</div>
                </li>
                <li>
                    <div>Wed</div>
                    <div>image</div>
                    <div>20C</div>
                </li>
                <li>
                    <div>Thursday</div>
                    <div>image</div>
                    <div>20C</div>
                </li>
                <li>
                    <div>Friday</div>
                    <div>image</div>
                    <div>20C</div>
                </li>
                <li>
                    <div>Saturday</div>
                    <div>image</div>
                    <div>20C</div>
                </li>
            </ul>
        </div>
        // <div>
        //     Header Active Theme: {data.theme}
        //     <br />
        //     <button onClick={() => {data.setTheme(data.theme === "light" ? "dark" : "light")}}>
        //         Change Theme
        //     </button>
        // </div>
    );
}

export default Content;
