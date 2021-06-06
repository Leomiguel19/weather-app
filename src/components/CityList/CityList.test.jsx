import React from 'react'
import { render } from '@testing-library/react'
import CityList from './CityList' //SUT

const cities = [
    { city: "Buenos Aires", country: "Argentina"},
    { city: "Caracas", country: "Venezuela"},
    { city: "Bógota", country: "Colombia"},
    { city: "Ciudad de México", country: "México"},
    { city: "Santiago", country: "Chile"},
]


test("CityList render", async () => {
    // AAA Arrange Act Assert

    const { findAllByRole } = render(<CityList cities={cities} />)

    const items = await findAllByRole("listitem") 

    expect(items).toHaveLength(5) 
})