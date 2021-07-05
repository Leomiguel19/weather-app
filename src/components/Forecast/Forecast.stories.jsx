import React from 'react'
import Forecast from './Forecast'

export default {
    title: "Forecast",
    component: Forecast
}

const forecastItemList = [
    { hour: 18, state:"sunny", temperature:17, weekDay:"Jueves" },
    { hour: 12, state:"cloud", temperature:18, weekDay:"Viernes"},
    { hour: 6, state:"cloudy", temperature:18, weekDay:"Viernes"},
    { hour: 14, state:"cloudy", temperature:19, weekDay:"Viernes"},
    { hour: 15, state:"rain", temperature:17, weekDay:"Sábado"},
    { hour: 9, state:"rain", temperature:17, weekDay:"Sábado"},
]
export const ForecastExample = () => (<Forecast forecastItemList={forecastItemList}/>)