

import React from 'react';


import '../../styles/topbar.css'

import tokonomo from '../../assets/tokonomo.png'
import binance from '../../assets/Binance.png'
import wallet from '../../assets/Wallet.png'
import profile from '../../assets/Profile.png'



const Topbar = () => {
    return (

        <div className='topbar'>


            <div className='topbar-tokonomo'><span><img alt='tokonom' src={tokonomo} /></span></div>


            <div className="topbar-buttom">
                <p className='boton-binance'> <span><img alt='binance' src={binance} /></span> BSC Mainnet</p>
                <p className='boton-wallet'><span><img alt='wallet' src={wallet} /></span>xzcWx...434ND</p>
                <p className='boton-profile' ><span><img alt='profile' src={profile} /></span></p>

            </div>

        </div >
    );
}

export default Topbar;