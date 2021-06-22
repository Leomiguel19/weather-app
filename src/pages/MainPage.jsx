import React from 'react'
import {useHistory} from 'react-router-dom'
import Paper from '@material-ui/core/Paper'
import AppFrame from './../components/AppFrame'
import CityList from './../components/CityList'

const cities = [
    { city: "Buenos Aires", country: "Argentina", countryCode: "AR"},
    { city: "Caracas", country: "Venezuela", countryCode: "VE"},
    { city: "Bogota", country: "Colombia", countryCode: "CO"},
    { city: "Ciudad de México", country: "México", countryCode: "MX"},
    { city: "Santiago", country: "Chile", countryCode: "CL"},
]

const MainPage = props => {
    const history = useHistory()

    const onClickHandler = () => {
        // history.push permite alterar la URL por programación
        history.push("/city")
    }

    return (
        <AppFrame>
            <Paper elevation={3}>                
                <CityList 
                    cities={cities}
                    onClickCity={onClickHandler}
                />
            </Paper>
        </AppFrame>
    )
}

export default MainPage
