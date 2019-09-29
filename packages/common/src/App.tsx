import React from "react";
import { View } from "react-native";
// import { NativeRouter as Router, Route, Link } from "react-router-native";
import HomeScreen from './routes/HomeScreen';
import WelcomeScreen from './routes/WelcomeScreen';
import MiniAppScreen from './routes/MiniAppScreen'
import IamRouter from './routes/IamRouter';
import { Router, Route } from './shared/Routing';

const App = () => (
    <Router>
        <Route exact path="/" component={WelcomeScreen} />
        <Route path="/Home" component={HomeScreen} />
        <Route path="/MiniApp" component={MiniAppScreen} />
        <Route path="/login" render={IamRouter}/>
    </Router>
);


export default App;