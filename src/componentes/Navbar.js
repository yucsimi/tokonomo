import React from 'react';


import '../styles/navbar.css'

import tokonomo from '../assets/tokonomo.png'

const Navbar = () => {
    return (

        <div className='navbarr row'>

            <div className='navbar-navegador '>

                <div className='navbar-logo mx-3'><span><img src={tokonomo} /> </span></div>

                <div className='navbar-botones '>
                    <p className='boton-tokensList d-none d-md-flex'>Tokens List</p>
                    <p className='boton-getStarted mx-2/3'>Get started</p>
                </div>
            </div>


        </div>
    );
}

export default Navbar;
