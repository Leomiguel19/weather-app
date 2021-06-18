import React from 'react'
import { BrowserRouter as Router, 
    Switch,
    Route,
    } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import CityPage from './pages/CityPage'
import MainPage from './pages/MainPage'
import NotFoundPage from './pages/NotFoundPage'
import WelcomePage from './pages/WelcomePage'

const App = () => {
    return (
        <Grid container
            justify="center"
            direction="row"        
        >
            <Grid item 
                xs={12}                
                sm={10}
                md={10}
                lg={8}>
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
            </Grid>
        </Grid>
    )
}

export default App
