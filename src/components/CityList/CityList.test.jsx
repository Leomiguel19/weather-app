import React from 'react'
import { fireEvent, render } from '@testing-library/react'
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

test("CityList click o item", async () => {
    // Debemos simular una acción del usuario: click sobre un item
    // Para eso vamos a utilizar una función "mock"
    const fnClickOnItem = jest.fn()

    const { findAllByRole } = render(<CityList cities={cities} onClickCity={fnclickOnItem} />)

    const items = await findAllByRole("listitem")

    // Ahora, para simular la acción, vamos a utilizar fireEvent
    // fireEvent es parte de la librería testing-library/react

    fireEvent.click(items[0])

    // ¿Ahora que tuvo que suceder?
    // Se debio llamar a la función fnClickOnItem UNA única vez

    expect(fnClickOnItem).toHaveBeenCalledTimes(1)
})