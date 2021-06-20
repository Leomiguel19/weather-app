import React from 'react'
import AppFrame from './AppFrame'
import { BrowserRouter as Router } from 'react-router-dom'

export default {
    title: "AppFrame",
    component: AppFrame
}

export const AppFrameExample = () => (
    <Router>        
        <AppFrame>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam accusantium mollitia, atque dolorem dolorum non eligendi commodi fugit autem voluptatum sequi voluptas illum ut quod reiciendis delectus, iusto tempora quam?
        </AppFrame>
    </Router>
)