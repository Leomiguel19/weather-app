import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import CityInfo from './../CityInfo'
import Weather from './../Weather'

// li: es un item (según tag html)
// renderCityAndCountry se va a convertir en una función que retorna otra función
const renderCityAndCountry = eventOnClikCity => cityAndCountry => {
    const { city, country } = cityAndCountry

    return (
        <li key={city} onClick={eventOnClikCity}>    
            <Grid container
                justify="center"
                alignItems="center"
            >                 
                <Grid item
                    md={4}
                    sm={12}>
                    <CityInfo city={city} country={country} />                    
                </Grid>
                <Grid item
                    md={4}
                    sm={12}>
                    <Weather temperature={10} state="sunny"/>
                </Grid>
            </Grid>        
        </li>
    )
}

// cities: es un array, y en cada item tiene que tener la ciudad, pero además el país.
// ul: tag html para listas no ordenadas
const CityList = ({cities, onClickCity}) => {
    return (
        <ul>
            {
                cities.map(cityAndCountry => renderCityAndCountry(onClickCity)(cityAndCountry))
            }
        </ul>
    )
}

CityList.propTypes = {
    cities: PropTypes.shape({
        city: PropTypes.string.isRequired,
        country: PropTypes.string.isRequired,
    }).isRequired,
    onClickCity: PropTypes.func.isRequired
}

export default CityList
