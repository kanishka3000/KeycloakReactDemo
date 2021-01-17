import React from 'react';
import {Link} from 'react-router-dom';

class Navigation extends React.Component{
    render(){
        return (
            <div>
                <nav className="nav flex-column">
                    <Link className="nav-link " aria-current="page" to = '/home'>Home</Link>   
                    <Link className="nav-link " aria-current="page" to = '/product'>Products</Link>   
                </nav>
            </div>
        );
    }
}

export default Navigation;