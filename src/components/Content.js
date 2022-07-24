import {useContext} from "react";
import {ContentContext} from "../context/ContentContext";

function Content() {
    const {weeklyValue} = useContext(ContentContext);

    return (
        <div className={`daysListWrapper`}>
            <ul className={`daysList`}>
                {
                    weeklyValue.map((item, i) => {
                        return (<li key={i} className={i == 0 ?`activeDay`:''}>
                            <div>{
                                new Date(item.dt * 1000).toLocaleDateString('en', { weekday: 'long', })
                            }</div>
                            <div>
                                <img alt={"icon"} width={"100%"} src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} />
                            </div>
                            <div>{Math.ceil(item.temp.day)}&#176;</div>
                        </li>)
                    })
                }
            </ul>
        </div>

    );
}

export default Content;
