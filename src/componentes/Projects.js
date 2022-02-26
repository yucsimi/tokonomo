import React from 'react';

import '../styles/projects.css'
import cohete from '../assets/cohete.png'
import coctel from '../assets/coktel.png'
import grafic from '../assets/grafico.png'


const Projects = () => {
    return (

        <div className='projects row'>

            <h4 className='projects-title col-12  '>The space where<span className='mx-3 d-none d-md-flex'><img src={cohete} /></span>
                projects meet their early investors </h4>


            <div className='projects-cartas row '>

                <div className='col-6 col-md-3 carta mx-5'>
                    <span className='imagen-coctel'><img src={coctel} /></span>
                    <p className=' cartas-info'>Get early investment access to the great new tokens</p>
                    <p className='cartas-boton col-2 col-md-3'>Start investing</p>

                </div>


                <div className='col-6 col-md-3 carta'>
                    <span className='imagen-grafico'><img src={grafic} /></span>
                    <p className=' cartas-info'>Launch your project with IDO (Initial Dex Offering)</p>
                    <p className='cartas-boton col-2 col-md-3 '>Launch project</p>


                </div>


            </div>



        </div >
    );
}

export default Projects;