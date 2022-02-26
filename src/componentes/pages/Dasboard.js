import React from 'react';


import '../../styles/dasboard.css'


import dasboard from '../../assets/dasbor.png'
import bolsa from '../../assets/bolsa.png'
import flechaizquierda from '../../assets/flechaizquierda.png'
import flechaderecha from '../../assets/flechaderecha.png'
import listing from '../../assets/listing.png'
import dinero from '../../assets/dinero.png'
import frame from '../../assets/Frame.png'
import frameDos from '../../assets/frameDos.png'
import invesment from '../../assets/investments.png'
import grafica from '../../assets/grafica.png'
import coheteAzul from '../../assets/CoheteAzul.png'
import frametres from '../../assets/frametres.png'
import groop48 from '../../assets/Group48.png'
import groop6 from '../../assets/Group6.png'
import groop09 from '../../assets/Grou09.png'
import elipse from '../../assets/Ellipse.png'


const Dasboard = () => {
    return (


        <div className='Dasboard '>
            <p className='dasboard-title'><span><img src={dasboard} /></span>Dashboard</p>

            <div className='d-flex one-Cart '>


                <div className=' carta'>

                    <p className='cart-subtitle border'><span className='mx-2'><img src={bolsa} /></span> Announcements  <span className='imagen-flecha'><img src={flechaizquierda} /></span>  <span className='mx-2'><img src={flechaderecha} /></span> </p>
                    <span><img src={listing} /></span>

                </div>
                <div>

                    <p className='carta-subtitulo border'><span className='mx-2'><img src={dinero} /></span> Promoted  <span className='segundaImagenflecha'><img src={flechaizquierda} /></span>  <span className='mx-2'><img src={flechaderecha} /></span>  </p>

                    <div className='d-flex '>

                        <div>


                            <span><img src={frame} /></span>
                            <span><img src={frameDos} /></span>
                        </div>



                    </div>


                </div>


            </div>




            <div className=' d-flex Cartas '>



                <div className='d-block  row'>

                    <div className='col-12 col-md-10'>
                        <p className='carta-subtitulo'><span className='mx-2'><img src={invesment} /></span>Your Investments</p>

                        <div className='cartas-abajo '>

                            <p className='cartasAbajo-title'>Investments ROI</p>
                            <p className='cartasAbajo-boton'>+228% ($ 776.43 USD)</p>
                        </div>
                        <div className='cartasabajo'>

                            <p className='balace'>BALANCE IN USD</p>
                            <p className='valores'>$ 776.43</p>
                        </div>
                        <span className='grafica'><img src={grafica} /></span>



                    </div>


                </div>


                <div className=' row'>
                    <p className='carta-subtitulo'><span className='mx-2'><img src={coheteAzul} /></span>Your starter IDOs <span className='segundacartaFlecha'><img src={flechaizquierda} /></span>  <span className='mx-2'><img src={flechaderecha} /></span> </p>
                    <div className='col-12 col-md-8'>


                        <div className=' cart-PartI'>

                            <span className='mx-2'><img src={groop48} /></span>

                            <div className='d-flex PartI-adentro'>

                                <span className=''><img src={groop6} /></span>
                                <span className='mx-2'><img src={groop09} /></span>


                                <div className='cart-IpartBoton'>
                                    <span className='elipse '><img src={elipse} /></span>
                                    <p className='upcomin my-3'>Upcoming</p>

                                </div>




                            </div>

                        </div>

                        <div className='cartPartII  m-0'>
                            <p className='cartPartII-title m-0 my-2 mx-3'>Gods unchained</p>
                            <p className='cartParteII-valores mx-3'>1 BNB = 1 GODS</p>

                            <div className=' cartPartII-I'>
                                <p className=' cartPartII-values'>Soft / Hard Cap:</p>
                                <p className='cartPartII-valores'>1 BNB - 2 BNB</p>

                            </div>

                        </div>

                        <div>

                            <div className=' box '>
                                <p className='box-title' >Raised</p>
                                <p className='box-values'> (0.25 %)</p>
                            </div>
                            <div className='progreso '>

                                <div className='tamano-progreso'></div>

                            </div>
                            <div className='d-flex caja '>

                                <p className='caja-values'>1 BNB</p>
                                <p className='caja-valores'>200 BNB</p>
                            </div>


                        </div>
                        <div className='segundaCaja '>

                            <p className='segundaCaja-values'>1 Liqudity %:</p>
                            <p className='segundaCaja-valores'>90 %</p>
                        </div>
                        <div className=' terceraCaja '>

                            <p className='terceraCaja-values'>Lockup Time:</p>
                            <p className='terceraCaja-valores'>400 000 minutes</p>
                        </div>


                        <div className='cartaParteIII'>

                            <div className=' cartaParteIII-I'>
                                <p className='cartaParteIII-title'>Sale Starts In:</p>
                                <p className='cartaParteIII-titulo'>00:05:32:53</p>
                            </div>
                            <p className='cartaParteIII-boton'>View Pool</p>

                        </div>


                    </div>

                </div>





            </div>


        </div>
    );
}

export default Dasboard;