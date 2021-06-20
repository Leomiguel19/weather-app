import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import CityInfo from './../CityInfo'
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Weather from './../Weather'

// li: es un item (según tag html)
// renderCityAndCountry se va a convertir en una función que retorna otra función
const renderCityAndCountry = eventOnClikCity => (cityAndCountry, weather) => {
    const { city, country } = cityAndCountry
    const {temperature, state} = weather
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
                    <Weather temperature={temperature} state={state}/>
                </Grid>
            </Grid>        
        </ListItem>
    )
}

// cities: es un array, y en cada item tiene que tener la ciudad, pero además el país.
// ul: tag html para listas no ordenadas
const CityList = ({cities, onClickCity}) => {
    const weather = {temperature: 10, state: "sunny"}
    return (
        <List>
            {
                cities.map(cityAndCountry => renderCityAndCountry(onClickCity)(cityAndCountry, weather))
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
