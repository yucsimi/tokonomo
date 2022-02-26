import React from 'react';


/* import features from '../styles/features.css' */

import dasboard from '../assets/dashboard.png'
import composition from '../assets/Composition.png'
import composition2 from '../assets/Composition2.png'
import money from '../assets/money.png'
import segurity from '../assets/segurity.png'


const Features = () => {
    return (


        <div className='features'>

            <h4 className='features-title'>Features that make the fundraising process
                simple as 1-2-3</h4>



            <div className='features-part2 row'>





                <div className='features-division col-12 col-md-6 col-sm-12'>

                    <h5 className='cartas-titulo'>For Investors:</h5>

                    <div className='features-cartas'>

                        <div className='carta-dasboard '>

                            <span className='imagen-dasboard'><img alt='dasboard' src={dasboard} /></span>
                            <h6 className='cartas-title'>Portfolio Tracking</h6>
                            <p className='cartas-info'>Track changes in your assets from investments made
                            </p>


                        </div>
                        <div className='carta-composition  '>

                            <span className='imagen-compositionn'><img alt='composition' src={composition} /></span>
                            <h6 className='cartas-title1'>Automatic projects scanner</h6>
                            <p className='cartas-info'>Estimate the risk
                                of project's fraud based on mathematical factors before investing in</p>


                        </div>

                    </div>

                </div>




                <div className='features-division col-12 col-md-6 col-sm-12  '>

                    <h5 className='cartas-titulo'>For Teams:</h5>

                    <div className='features-cartas'>


                        <div className='carta-composition  '>

                            <span className='imagen-composition2'><img alt='composition2' src={composition2} /></span>
                            <h6 className='cartas-title1'>KYC</h6>
                            <p className='cartas-info'>Optional KYC and verification for projects</p>


                        </div>

                        <div className='carta-composition '>

                            <span className='imagen-money'><img alt='money' src={money} /></span>
                            <h6 className='cartas-title1'>Raise funds</h6>
                            <p className='cartas-info'>Create a token IDO with just a few clicks</p>


                        </div>

                        <div className='carta-composition '>

                            <span className='imagen-segurity'><img alt='segurity' src={segurity} /></span>
                            <h6 className='cartas-title1'>Locking</h6>
                            <p className='cartas-info'>Lock your liqudity or your tokens to give your investors confidence in your project</p>


                        </div>
                    </div>

                </div>






            </div>



        </div >
    );
}

export default Features;