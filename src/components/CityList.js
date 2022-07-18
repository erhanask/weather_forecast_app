import {useContext} from "react";
import {ThemeContext} from "../context/ThemeContext";

function CityList() {
    const data = useContext(ThemeContext);

    return (
        <div className={`dropdownSection`}>
            <div className={`dropdownWrapper`}>
                <select className={`cityDropdown`}>
                    <option>İstanbul</option>
                    <option>Ankara</option>
                </select>
            </div>
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

export default CityList;
