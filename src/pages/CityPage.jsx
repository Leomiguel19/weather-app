import React from 'react'
import {Link} from 'react-router-dom'
import Grid from '@material-ui/core/Grid'

import CityInfo from './../components/CityInfo'
import Forecast from './../components/Forecast'
import ForecastChart from './../components/ForecastChart'
import Weather from './../components/Weather'
import WeatherDetails from './../components/WeatherDetails'

const dataExample = [
    {
        "dayHour": "Jue 18",
        "min": 14,
        "max": 22,
    },
    {
        "dayHour": "Vie 06",
        "min": 18,
        "max": 27,
    },
    {
        "dayHour": "Vie 12",
        "min": 18,
        "max": 28,
    },
    {
        "dayHour": "Vie 18",
        "min": 18,
        "max": 25,
    },
    {
        "dayHour": "Sab 06",
        "min": 15,
        "max": 22,
    },
    {
        "dayHour": "Sab 12",
        "min": 12,
        "max": 19,
    }
]

const forecastItemListExample = [
    { hour: 18, state:"sunny", temperature:17, weekDay:"Jueves" },
    { hour: 12, state:"cloud", temperature:18, weekDay:"Viernes"},
    { hour: 6, state:"fog", temperature:18, weekDay:"Viernes"},
    { hour: 14, state:"cloudy", temperature:19, weekDay:"Viernes"},
    { hour: 15, state:"rain", temperature:17, weekDay:"Sábado"},
    { hour: 9, state:"rain", temperature:17, weekDay:"Sábado"},
]

const CityPage = () => {
    const city = "Margarita"
    const country = "Porlamar"
    const state = "cloudy"
    const temperature = 20
    const humidity = 80
    const wind = 5
    const data = dataExample
    const forecastItemList = forecastItemListExample

    return (
        <Grid container
            justify="center"
            direction="column"
        > 
            <Grid item xs={12}>
                <CityInfo city={city} country={country} />
            </Grid>
            <Grid container item xs={12}>
                <Grid item xs={8}>
                    <Weather state={state} temperature={temperature}/>
                </Grid>
                <Grid item xs={4}>
                    <WeatherDetails humidity={humidity} wind={wind}/>
                </Grid>
            </Grid>
            <Grid item>
                <ForecastChart data={data}/>
            </Grid>
            <Grid item>
                <Forecast forecastItemList={forecastItemList}/>
            </Grid>
        </Grid>
    )
}

export default CityPage
