import React from 'react'
import {render} from '@testing-library/react'
import CityInfo from './CityInfo' // SUT: Subject under testing (objeto del testeo)

test("CityInfo render", async () => {
    // AAA
    // Arrange
    // Act
    const city = "Margarita"
    const country = "Venezuela"

    // Render: renderiza el componente y retorna una serie de funciones de utilidad
    // En este caso utilizaremos "findAllByRole" para "consultar" a nuestro componente
    // Vamos a analizar su estado en el "Assert"
    const { findAllByRole } = render(<CityInfo city={city} country={country}></CityInfo>)

    // Assert
    // findAllByrole nos va a buscar (en este caso) todos los componentes que sean 
    // "heading" => H1, H2, H3... etc
    // El resultado es un array de componentes (cityAndCountryComponents)
    const cityAndCountryComponents = await findAllByRole("heading")

    // Cuando el test va a ser correcto?
    // Definición
    // Cuando en el primer elemento (heading) se encuentre la ciudad "Margarita"
    // Y cuando en el segundo elemento se encuentre el país Venezuela

    expect(cityAndCountryComponents[0]).toHaveTextContent(city)
    expect(cityAndCountryComponents[1]).toHaveTextContent(country)

    // Si estas condiciones se cumplen (expect), el test esta "ok"


})