import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import CityInfo from './../CityInfo'
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Weather from './../Weather'

// li: es un item (según tag html)
// renderCityAndCountry se va a convertir en una función que retorna otra función
const renderCityAndCountry = eventOnClikCity => (cityAndCountry, weather) => {
    const { city, country } = cityAndCountry
    // const {temperature, state} = weather
    return (
        <ListItem 
            button
            key={city} 
            onClick={eventOnClikCity}>    
            <Grid container
                justify="center"
                alignItems="center"
            >                 
                <Grid item
                    md={9}
                    sm={12}>
                    <CityInfo city={city} country={country} />                    
                </Grid>
                <Grid item
                    md={3}
                    sm={12}>
                    {
                        weather ?
                        (<Weather 
                        temperature={weather.temperature} 
                        state={weather.state}/>)
                        :
                        ("No hay datos")

                    }
                </Grid>
            </Grid>        
        </ListItem>
    )
}

// cities: es un array, y en cada item tiene que tener la ciudad, pero además el país.
// ul: tag html para listas no ordenadas
const CityList = ({cities, onClickCity}) => {
    /*
        {
            [Buenos Aires-argentina]: { },
            [Caracas-Venezuela]: { },
            [Bogota-Colombia]: { },
            [Ciudad de México-México]: { },
            [Santiago-Chile]: { },
        }
    */
    const [allWeather, setAllWeather] = useState({})

    useEffect(() => {
        const setWeather = (city, country) => {
            const appid = "8ca8b92755d535817ffbe4b83167dea5"
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appid}`
            axios
            .get(url)
            .then(response => {
                const {data} = response
                const temperature = data.main.temp
                const state = "sunny"

                const propName = `${city}-${country}` // Ej: [Buenos Aires-Argentina]
                const propValue = {temperature, state} // Ej: {temperature: 10, state: "sunny"}

                console.log("propName", propName)
                /*
                allWeather 1er pasada:
                    {
                        [Buenos Aires-Argentina]: {temperature: 10, state: "sunny"}
                    }
                allWeather 2da pasada:
                        [Buenos Aires-Argentina]: {temperature: 10, state: "sunny"}
                        [Caracas-Venezuela]: {temperature: 10, state: "sunny"}
                */
               // set[VARIABLE_ESTADO](VARIABLE_ESTADO => VARIABLE_ESTADO + 1)  
                setAllWeather(allWeather => {
                    const result = { ...allWeather, [propName]:propValue}
                    console.log("allWeather [result] ", result)
                    return result
                })
            })
        }
        cities.forEach(({city, country}) => {
            setWeather(city, country)
        });
    }, [cities])

    const weather = {temperature: 10, state: "sunny"}
    return (
        <List>
            {
                cities.map(cityAndCountry => renderCityAndCountry(onClickCity)(cityAndCountry, 
                    allWeather[`${cityAndCountry.city}-${cityAndCountry.country}`]))
            }
        </List>
    )
}

CityList.propTypes = {

    cities: PropTypes.arrayOf(
        PropTypes.shape({
            city: PropTypes.string.isRequired,
            country: PropTypes.string.isRequired,
        }).isRequired,
    ),
    onClickCity: PropTypes.func.isRequired
}

export default CityList
