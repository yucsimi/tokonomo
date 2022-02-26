

import React from 'react';


import '../../styles/topbar.css'

import tokonomo from '../../assets/tokonomo.png'
import binance from '../../assets/Binance.png'
import wallet from '../../assets/Wallet.png'
import profile from '../../assets/Profile.png'



const Topbar = () => {
    return (

        <div className='topbar'>


            <div className='topbar-tokonomo'><span><img src={tokonomo} /></span></div>


            <div className="topbar-buttom">
                <p className='boton-binance'> <span><img src={binance} /></span> BSC Mainnet</p>
                <p className='boton-wallet'><span><img src={wallet} /></span>xzcWx...434ND</p>
                <p className='boton-profile' ><span><img src={profile} /></span></p>

            </div>

        </div >
    );
}

export default Topbar;