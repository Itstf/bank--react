import React, { Component } from 'react';
import '../loan.css';

function Loan() {
    return (  
        <>
            <div className='loan'>
                <div className='text'>
                    <h4>LOAN</h4>
                    <h2 className='gradient-text'> Know the options </h2>
                    <p> Money in your account! </p>
                    <p> In need of that extra help? </p>
                    <br />
                    <p> The credit you need, with the right security. </p>

                    <img src="icon-cartao.png" alt="" className='img-cartao'/>
                </div>

                {/* <div className='block1'></div> */}
                <div className='block2'>
                    <p>Installment Credit</p>
                    <ul>
                        <li> You have up to 72 months to pay;</li> 
                        <li> You can pay the 1st installment within 90 days;</li> 
                        <li> Does not affect credit card limit;</li> 
                        <li> The money immediately drops into your account;</li> 
                        <li> Approved amount according to monthly income;</li> 
                        <li> Subject to credit review.</li>
                    </ul>
                </div>
                <div className='block3'>
                    <p>Personal loan</p>
                    <ul>
                        <li> You have up to 48 months to pay; </li> <br />
                        <li> You can pay the 1st installment within 90 days; </li> <br />
                        <li> Installments paid via automatic debit; </li> <br />
                        <li> Subject to credit review. </li>
                    </ul>
                </div>

            </div>

            <div class="hero photo-1 parallax"></div>

        </>
    );
}

export default Loan;