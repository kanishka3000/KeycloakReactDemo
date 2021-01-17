import React from 'react';

class Header extends React.Component{

    render(){
        return (
            <div>
                <nav className="navbar navbar-dark bg-primary">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">Home</a>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Header;