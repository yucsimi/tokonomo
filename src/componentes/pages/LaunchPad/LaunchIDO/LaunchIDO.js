import React from 'react';
import LaunchIDOne from './LaunchIDO-ONE';
import '../../../../styles/launchIDO-ONE.css'


import arrow from '../../../../assets/Arrow.png'
import right from '../../../../assets/Right.png'
import comparison from '../../../../assets/comparison.png'
import LaunchIDOTwo from './LaunchIDO-Two';
import LauncghIDOThree from './LaunchIDO-TRHEE';
import LaunchIDOfor from './LaunchIDO-For';


const LaunchIDO = () => {
    return (

        <div className='launchido m-auto'>
            <p className='titulo-launchIDO'> <span className='mx-3 imagen'><img src={comparison} /></span>Launch IDO</p>

            <div className='col-12 col-md-12 d-flex contenedor '>
                <div className='d-block col-2  box-information '>

                    <div className='launchIDO-boton m-auto '>1</div>
                    <p className='launchIDO-title'>Verify Token</p>
                    <p className='launchIDO-subtitle'>Enter the token address and verify</p>

                </div>


                <div className='  box-barra-circle'>

                    <div className='launchIDO-circle '></div>
                    <div className='launchIDO-barra'></div>
                    <div className='launchIDO-circle '></div>
                </div>

                <div className='col-2   box-information '>

                    <div className='launchIDO-boton m-auto'>2</div>
                    <p className='launchIDO-title'>DeFi Launchpad info</p>
                    <p className='launchIDO-subtitle'> Enter details about your fundrasing campaing</p>

                </div>



                <div className='col- box-barra-circle '>

                    <div className='launchIDO-circle'></div>
                    <div className='launchIDO-barra'></div>
                    <div className='launchIDO-circle'></div>
                </div>


                <div className='col-2  box-information  '>

                    <div className='launchIDO-boton m-auto'>3</div>
                    <p className='launchIDO-title'>Project info</p>
                    <p className='launchIDO-subtitle'>Let people know more about your project</p>

                </div>
                <div className=' box-barra-circle'>

                    <div className='launchIDO-circle'></div>
                    <div className='launchIDO-barra'></div>
                    <div className='launchIDO-circle'></div>
                </div>

                <div className='col-2/3 box-information'>

                    <div className='launchIDO-boton m-auto'>4</div>
                    <p className='launchIDO-title'>Finish</p>
                    <p className='launchIDO-subtitle'>Review your information</p>

                </div>


            </div>



            {/*  COMPONENTES*/}

            {/*      <LaunchIDOne /> */}
            {/*             <LaunchIDOTwo /> */}

            {/*      <LauncghIDOThree /> */}
            <LaunchIDOfor />



            <div className='boton d-flex  '>
                <p className='boton-1 mx-2' ><span> <img src={right} /></span>Back </p>

                <p className='boton-1 border mx-2'>Next <span> <img src={arrow} /></span></p>


            </div>





        </div>
    );
}

export default LaunchIDO;