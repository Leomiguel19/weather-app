import React, {useRef, useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import Clouds from 'vanta/dist/vanta.clouds.min'
import * as THREE from 'three'

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
            // Acá vamos a hacer la inicialización de "vanta"
            // Activo el efecto "clouds"
            setVanta(Clouds({
                THREE,
                el: myRefDiv.current
            }))

            console.log("Establezco un valor diferente a 0")
        }
        // Al salir de la pantalla debemos detener el efecto
        // y des-asociar todos los recursos (div + vanta effect)
        return () => {
            // Dentro de esta función se va a realizar la tarea
            // de destruir los recursos tomados por "vanta"
            if(vanta){
                vanta.destroy()
                console.log("Libero los recursos")
            }
        }
    }, [vanta]) // Con esto me aseguro que siga funcionando bien 
                // si tuviera más variables "use"

    return (
        <div className="full" ref={myRefDiv}>
            {children}
        </div>
    )
}

WelcomeScreen.propTypes = {
    children: PropTypes.node,
}

export default WelcomeScreen
