import React from 'react'
import CityList from './CityList'

export default {
    title: "CityList",
    component: CityList
}

const cities = [
    { city: "Buenos Aires", country: "Argentina"},
    { city: "Caracas", country: "Venezuela"},
    { city: "Bógota", country: "Colombia"},
    { city: "Ciudad de México", country: "México"},
    { city: "Santiago", country: "Chile"},
]

export const CityListExample = () => <CityList cities={cities} />