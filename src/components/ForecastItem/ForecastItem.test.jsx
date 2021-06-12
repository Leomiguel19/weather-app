import React from 'react'
import { render } from '@testing-library/react'
import ForecastItem from './ForecastItem'
 
 
test("ForecastItem test", async () => {
   const {findByText} = render (<ForecastItem weekDay={"lunes"} hour={14} temperature={22} state={"sunny"}/>)
 
   const dia = await findByText(/lunes/)
   const hour = await findByText(/14/)
   const temperature = await findByText(/22/)
 
   expect(dia).toHaveTextContent("lunes")
   expect(hour).toHaveTextContent("14")
   expect(temperature).toHaveTextContent("22")
})