import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Navbar from '../components/Navbar'
import TechnicalSkills from '../pages/TechnicalSkills';

const Routes = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/skills' component={TechnicalSkills} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;