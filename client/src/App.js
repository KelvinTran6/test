import React from 'react';
import Main from './Main'
import Navbar from './components/Navbar'
import Create from './components/Create'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Switch>
                    <Route path="/" exact component={Main} />
                    <Route path="/Create" component={Create}/>
                </Switch>
            </div>
        </Router>
    )
}

export default App;