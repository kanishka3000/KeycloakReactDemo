import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Header from './components/general/Header';
import Navigation from './components/general/Navigation';

import Home from './components/general/Home';
import ProductView from './components/product/ProductView';

class App extends React.Component{
    render(){
        return (
            <div>
                <Header/>
                <div className = 'row '>
                <Router>
                    <div className = 'col-sm-1'>
                        <Navigation/>
                    </div>
                    <div className = 'col-sm-11'>
                        <div className = 'container align-items-center'>
                            <Route path = '/home' component = {Home} exact />
                            <Route path = '/product' component = {ProductView} exact/> 
                        </div> 
                    </div>
                </Router>
                </div>     
            </div>
        );
    }
}

export default App;