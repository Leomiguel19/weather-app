import React from 'react'
import {Link} from 'react-router-dom'

const CityPage = props => {
    return (
        <div>
            City
            <div>
                <Link to="/main">Volver al main</Link>
            </div> 
        </div>
    )
}

export default CityPage
