import React from 'react';


import '../styles/valuable.css'

import security from '../assets/security.png'
import explosion from '../assets/Explosion.png'
const Valuable = () => {
    return (



        <div className='valuable '>


            <h4 className='valuable-title'> Be a valuable part of  <span><img src={explosion} /></span> the DeFi economy  <span><img src={explosion} /></span></h4>
            <p className='boton-getStarted2'>Get started</p>


            <span className='valuable-imagen'><img src={security} /></span>
        </div>
    );
}

export default Valuable;