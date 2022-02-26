import React from 'react';

import '../../../../styles/lauchIDO-TWO.css'
const LaunchIDOTwo = () => {
    return (


        <div>
            <form className='row  '>
                <p className='lauchTWO-title m-0'>Presale rate *</p>


                <input type='text' placeholder='For example (0.02) ' className='formulario my-2' />
                <p className='form-1-title m-0'>If I spend 1 BNB how many tokens will I receive?</p>
            </form>




            <div className='check  d-block row'>

                <p className='botones-title'>Whitelist</p>


                <div className='botones-checkbox d-flex'>

                    <div className=" ">
                        <div className="input-group-prepend mx-3">
                            <div className="input-group-text">
                                <input type="checkbox" aria-label="Checkbox for following text input" />
                            </div>
                        </div>

                    </div>
                    <p className='title-checbox m-0'>Disable</p>


                    <div className="">
                        <div className="input-group-prepend mx-4">
                            <div className="input-group-text">
                                <input type="checkbox" aria-label="Checkbox for following text input" />
                            </div>

                        </div>
                    </div>
                    <p className='title-checbox m-0'>Enable</p>

                </div>


                <p className='botones-subtitle m-0'>You can enable / disable whitelist anytime</p>

            </div>




            <div className='d-flex '>


                <form className='d-block'>
                    <p className='lauchTWO-title'>Soft Cap (BNB) *</p>
                    <input className='form-1' type='text' placeholder='For example (0.02)' />

                </form>

                <form className='d-block mx-5'>
                    <p className='lauchTWO-title-1'>Hard Cap (BNB)  *</p>
                    <input className='form-2' type='text' placeholder='For example (0.02)' />


                </form>

            </div>
            <p className='botones-subtitle m-0'>Soft Cap must be 50% of Hard Cap!</p>



            <div className='d-flex m-0 '>
                <form className='d-block '>
                    <p className='lauchTWO-title'>Minimum buy (BNB) *</p>
                    <input className='form-1' type='text' placeholder='For example (0.02)' />

                </form>

                <form className='d-block mx-5'>
                    <p className='lauchTWO-title-1'>Maximum buy (BNB) *</p>
                    <input className='form-2' type='text' placeholder='For example (166.00)' />


                </form>



            </div>




            <div className=' input-select'>

                <form className='d-block'>
                    <p className='lauchTWO-title'>Refund type *</p>
                    <div className="w-100">

                        <select className="custom-select w-100" id="inputGroupSelect01">
                            <option selected>Burn</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>

                </form>

            </div>




            <div className='d-flex '>

                <form className='d-block '>
                    <p className='lauchTWO-title'>Liquidity (%) *</p>
                    <input className='form-1' type='text' placeholder='For example (2%)' />
                    <p className='form-1-title '>Enter the percentage of raised funds that should be allocated to Liquidity on
                        (Min 51%, 100%)</p>
                </form>


                <form className='d-block '>
                    <p className='lauchTWO-title-1'>Listing rate *</p>
                    <input className='form-2' type='text' placeholder='For example (2)' />
                    <p className='form-1-title mx-4'>1 BNB = 0.3 GMNE</p>

                </form>



            </div>


            <p className='m-0 lauchTWO-title-1 my-2'>Select start time & end time (UTC) *</p>


            <div className='d-flex'>
                <div className=' Primer-Select '>
                    <p className='m-0 lauchTWO-title-1 my-2'>Start time (UTC) *</p>

                    <select class="form-select form-select-sm  " aria-label=".form-select-sm example">
                        <option selected>Select date</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>



                </div>


                <div className='Segundo-Select'>
                    <p className='m-0 lauchTWO-title-1 my-2'>End time (UTC) *</p>

                    <select class="form-select form-select-sm   " aria-label=".form-select-sm example" placeholder="">
                        <option selected>Select date</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>

                </div>



            </div>



            <div className=''>
                <div className='Tercer-Select'>
                    <p className='lauchTWO-title m-0 '>Liquidity lockup (days) *</p>


                    <select class="form-select form-select-sm  my-2 " aria-label=".form-select-sm example" placeholder="">
                        <option selected>For example (0)</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>

                </div>






            </div>



            <div className='botones-finales d-flex my-4'>
                <p className='boton-kyc'>Request KYC (optional)</p>
                <p className='boton-verification'>Request verification (optional)</p>


            </div>
            <p className='ultimo-boton'>Need 2 GNKD to create the IDO</p>


        </div>
    );
}

export default LaunchIDOTwo;