import React from 'react'
import { BrowserRouter as Router, 
    Switch,
    Route,
    } from 'react-router-dom'
import CityPage from './pages/CityPage'
import MainPage from './pages/MainPage'
import NotFoundPage from './pages/NotFoundPage'
import WelcomePage from './pages/WelcomePage'

const App = () => {
    return (
        <div>
            <h1>App</h1>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <WelcomePage/>                      
                    </Route>
                    <Route path="/main">
                        <MainPage/>
                    </Route>
                    <Route path="/city">
                        <CityPage/>                      
                    </Route>
                    <Route>
                        <NotFoundPage/>
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default App
