import {useContext} from "react";
import {ThemeContext} from "../context/ThemeContext";
import {ContentContext} from "../context/ContentContext";
import {cities} from "../data/Cities";

function CityList() {
    const data = useContext(ThemeContext);
    const {weeklyValue,setCurrentCordinate} = useContext(ContentContext);
    //todo : options will be filled with value of Cities.js
    return (
        <div className={`dropdownSection`}>
            <div className={`dropdownWrapper`}>
                <select className={`cityDropdown`} onChange={(e) => {setCurrentCordinate(e.currentTarget.value)}}>
                    <option value={[41.015137,28.979530]}>İstanbul</option>
                    <option value={[39.925533,32.866287]}>Ankara</option>
                    <option value={[38.423733,27.142826]}>İzmir</option>
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
