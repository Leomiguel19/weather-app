import React from 'react'
import {useHistory} from 'react-router-dom'
import CityList from './../components/CityList'

const cities = [
    { city: "Buenos Aires", country: "Argentina"},
    { city: "Caracas", country: "Venezuela"},
    { city: "Bógota", country: "Colombia"},
    { city: "Ciudad de México", country: "México"},
    { city: "Santiago", country: "Chile"},
]

const MainPage = props => {
    const history = useHistory()

    const onClickHandler = () => {
        // history.push permite alterar la URL por programación
        history.push("/city")
    }

    return (
        <div>
            <h2>Lista de ciudades</h2>
            <CityList 
                cities={cities}
                onClickCity={onClickHandler}
            />
        </div>
    )
}

export default MainPage
