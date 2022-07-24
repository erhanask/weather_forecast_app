import {createContext, useState, useEffect} from "react";
import axios from "axios";

const ContentContext = createContext();

export const ContentProvider = ({children}) => {
    const [weeklyValue, setWeeklyValue] = useState([]);
    const [currentCordinate, setCurrentCordinate] = useState([41.015137, 28.979530]);
    const apiKey = 'a4d3aad7582433eca4b3b3f1e24a63a8';

    useEffect(() => {
        const setData = async () => {
            const res = axios(
                `https://api.openweathermap.org/data/2.5/onecall?lat=${currentCordinate[0]}&lon=${currentCordinate[1]}&exclude=hourly,minutely&lang=tr&units=metric&appid=${apiKey}`,
            );
            console.log((await res).data.daily);
            setWeeklyValue((await res).data.daily);
        }
        setData();
    }, [currentCordinate]);


    const values = {
        weeklyValue,
        setCurrentCordinate
    }

    return (
        <ContentContext.Provider value={values}>{children}</ContentContext.Provider>
    );
}

export {ContentContext};
