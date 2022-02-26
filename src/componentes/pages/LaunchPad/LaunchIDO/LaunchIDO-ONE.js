import React from 'react';


const LaunchIDOne = () => {
    return (

        <div className='row'>

            <div className='row  form'>
                <p className='form-title'>Token address *</p>
                <form className='form-one'>

                    <input type='text' className='input' placeholder='For example (dsbfe3443lkxoewrnerncx43nfmv43o43)' />
                </form>

                <form className='from-two'>

                    <input type='text' className='input-two' placeholder="Current Fees 1 BNB + 2% of Tokens Sold + 2% of BNB Raised" />
                </form>


            </div>


        </div>

    );
}

export default LaunchIDOne;