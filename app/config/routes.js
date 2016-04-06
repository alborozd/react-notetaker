import React from 'react';
import Main from '../components/Main';
import Home from '../components/Home';
import { Router, Route } from 'react-router';
import Profile from '../components/Profile';

export default (
    <Route component={Main}>    
        <Route path="profile/:username" component={Profile} />
        <Route path="/" component={Home} />    
    </Route>
)