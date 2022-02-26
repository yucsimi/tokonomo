import React from 'react';

import '../../../../styles/LaunchIDO-TREE.css'
const LauncghIDOThree = () => {
    return (
        <div>




            <div className='d-flex m-0 '>
                <form className='d-block '>
                    <p className='lauchTWO-title'>Logo URL *</p>
                    <input className='form-1' type='text' placeholder='For example (https://website.com)' />

                </form>

                <form className='d-block mx-5'>
                    <p className='lauchTWO-title-1'>Website *</p>
                    <input className='form-2' type='text' placeholder='For example (https://website.com)' />


                </form>



            </div>



            <div className='d-flex m-0 '>
                <form className='d-block '>
                    <p className='lauchTWO-title'>Facebook</p>
                    <input className='form-1' type='text' placeholder='For example (https://facebook.com/...)' />

                </form>

                <form className='d-block mx-5'>
                    <p className='lauchTWO-title-1'>Twitter </p>
                    <input className='form-2' type='text' placeholder='For example (https://twitter.com/...)' />


                </form>



            </div>



            <div className='d-flex m-0 '>
                <form className='d-block '>
                    <p className='lauchTWO-title'>Github</p>
                    <input className='form-1' type='text' placeholder='For example (https://github.com/...)' />

                </form>

                <form className='d-block mx-5'>
                    <p className='lauchTWO-title-1'>Telegram</p>
                    <input className='form-2' type='text' placeholder='For example (https://t.me/...)' />


                </form>



            </div>





            <div className='d-flex m-0 '>
                <form className='d-block '>
                    <p className='lauchTWO-title'>Instagram</p>
                    <input className='form-1' type='text' placeholder='For example (https://instagram.com/...)' />

                </form>

                <form className='d-block mx-5'>
                    <p className='lauchTWO-title-1'>Discord</p>
                    <input className='form-2' type='text' placeholder='For example (https://t.me/...)' />


                </form>



            </div>

            <div>


                <form className='row  '>
                    <p className='lauchTWO-title m-0'>Reddit</p>


                    <input type='text' placeholder='For example (https://reddit.com/...) ' className='formulario my-2' />
                </form>
            </div>


            <div>


                <form className=' m-0'>
                    <p className='lauchTWO-title m-0'>Description</p>


                    <input type='text' placeholder='About your project' className='formulario-launchidotree my-2' />
                </form>
            </div>



        </div>

    );
}

export default LauncghIDOThree;