import React, {useRef, useEffect, useState} from 'react'
import PropTypes from 'prop-types'

const WelcomeScreen = ({children}) => {
    const myRefDiv = useRef(null) // Valor inicial
    const [vanta, setVanta] = useState(0) // Vanta va a ser inicializado en "0"
    
    // En la primera renderización "MyRefDiv.current" es igual
    // a "nulo", el valor inicial
    console.log("myRefDiv.current", myRefDiv.current)

    useEffect(() => {
        console.log("myRefDiv.current (en useEffect)", myRefDiv.current)

        // Sólo pasa una vez por dentro del if
        // vanta === 0, es igual a "vanta == false"
        // ... aún más corto, es igual a "!vanta"
        if(!vanta){
            // SOLO PASA UNA VEZ
            setVanta(1) // Vanta = 1
            console.log("Establezco un valor diferente a 0")
        }
    })

    return (
        <div ref={myRefDiv}>
            WelcomeScreen
        </div>
    )
}

WelcomeScreen.propTypes = {
    children: PropTypes.node,
}

export default WelcomeScreen
