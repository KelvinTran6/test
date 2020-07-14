import React from 'react';
import Main from './Main'
import Navbar from './components/Navbar'
import Create from './components/Create'
import FullView from './components/FullView'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Switch>
                    <Route path="/" exact component={Main} />
                    <Route path="/Create" component={Create}/>
                    <Route path ="/Books/:title" component = {FullView}/>
                </Switch>
            </div>
        </Router>
    )
}

export default App;