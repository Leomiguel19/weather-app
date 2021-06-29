import React, {Component} from 'react'


class ErrorBoundary extends Component {


    render(){
        return(
            <div>
                <h1>
                    ErrorBoundary {this.props.saludo}
                </h1>
            </div>
        )
    }

}

export default ErrorBoundary