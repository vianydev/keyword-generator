import React from 'react';
import './Nav.css';

const Nav = ({ handleRouteChange, route }) => {
    return (
        <div>
            <div style={route === 'home' ? {display: 'inline'} : {display: 'none'} }> 
                <p className='f4 dim tr ph5 pointer'
                onClick={()=>handleRouteChange('signin')}
                >Sign Out</p>
            </div>
            <div style={route === 'signin' ? {display: 'inline'} : {display: 'none'} }> 
                <p className='f4 dim tr ph5 pointer'
                onClick={()=>handleRouteChange('register')}
                >Register</p>
            </div>
        </div>
    );
}

export default Nav;