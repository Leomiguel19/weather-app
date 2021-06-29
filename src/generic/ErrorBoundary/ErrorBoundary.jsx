import React, {Component} from 'react'


class ErrorBoundary extends Component {

    constructor(props){
        super(props)

        this.state = {
            activo: false
        }
    }

    estaActivo = () => {
        return this.state.activo ? "Activo": "No activo"
    }

    onClickHandler = () => {
        // setState
        this.setState({activo:true})
    }

    componentDidMount(){
        console.log("El componente se ha montado")
    }

    render(){
        return(
            <div>
                <button onClick={this.onClickHandler}>Activar</button>
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