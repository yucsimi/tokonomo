import React from 'react';

import '../styles/header.css'


const Header = () => {
    return (

        <div className='header'>

            <div className='header-principal col-6 row'>
                <h3 className='header-title '>Find the next bitcoin first on Tokonomo</h3>



                <p className='header-info'>Tokonomo is where early adopters and investors find lively, imaginative tokens before they hit mainstream</p>
                <div className=' header-botones'>
                    <p className='boton-getStarted '>Get started</p>
                    <p className='boton-learnMore'>Learn more</p>



                </div>


            </div>
        </div>
    );
}

export default Header;