import React from 'react'
import {Link} from 'react-router-dom'

const MainPage = props => {
    return (
        <div>
            Main
            <div>
                <Link to="/main">Volver al main</Link>
            </div>
        </div>
    )
}

export default MainPage