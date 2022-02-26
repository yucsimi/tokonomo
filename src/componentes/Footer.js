import React from 'react';


import '../styles/footer.css'


import tokonomo from '../assets/tokonomo.png'


import twitter from '../assets/twitter.png'
import telegramm from '../assets/telegramm.png'
import facebook from '../assets/facebook.png'
import discord from '../assets/discord.png'

const Footer = () => {
    return (


        <div className='footer'>


            <div className='footer-imagenes'>
                <span className=' mx-4'><img src={tokonomo} /></span>

                <div className=''>
                    <span className='mx-3'><img src={twitter} /></span>
                    <span className='mx-3'><img src={telegramm} /></span>
                    <span className='mx-3'><img src={facebook} /></span>
                    <span className='mx-3'><img src={discord} /></span>


                </div>




            </div>
            <p className='footer-info'>Disclaimer: The information provided shall not in any way constitute a recommendation as to whether you should invest in any product discussed. We accept no liability for any loss occasioned to any person acting or refraining from action as a result of any material provided or published. © 2021</p>

        </div>
    );
}

export default Footer;