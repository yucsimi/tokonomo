import React from 'react';


import '../styles/pantalla.css'

import macbook from '../assets/MacBook.png'

const Pantalla = () => {
    return (

        <div className='pantalla row '>


            <span className='col-12 col-md-12 m-0 pantalla-imagen' ><img alt='macbook' src={macbook} /></span>
        </div>


    );
}

export default Pantalla;