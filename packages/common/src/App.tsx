import React, { useState } from "react";
import { Router, Route } from './shared/components/Routing';
import HomeScreen from './routes/HomeScreen';
import WelcomeScreen from './routes/WelcomeScreen';
import MiniAppScreen from './routes/MiniAppScreen'
import IamRouter from './routes/IamRouter';
import { Provider as AdminStoreProvider } from "./context/authen";

const App = () => {

  return (
    <AdminStoreProvider>
      <Router>
        <Route exact path="/" component={WelcomeScreen} />
        <Route path="/Home" component={HomeScreen} />
        <Route path="/MiniApp" component={MiniAppScreen} />
        <Route path="/login/" render={IamRouter} />
      </Router>
    </AdminStoreProvider>
  )
};


export default App;