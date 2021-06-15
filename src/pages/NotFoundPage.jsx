import React from 'react'
import {Link} from 'react-router-dom'

const NotFoundPage = () => {
    return (
        <div>
            404 - Not Found
            <div>
                <Link to="/main">Volver al main</Link>
            </div>           
        </div>
    )
}

export default NotFoundPage
