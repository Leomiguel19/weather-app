import React, {Component} from 'react'


class ErrorBoundary extends Component {

    estaActivo = () => {
        return this.props.activo ? "Activo": "No activo"
    }

    render(){
        return(
            <div>
                <h1>
                    ErrorBoundary {this.props.saludo} <br/>
                    {
                        this.estaActivo()
                    }
                </h1>
            </div>
        )
    }

}

export default ErrorBoundary