import React, { Component } from 'react';
import '../loan.css';

function Loan() {
    return (  
        <>
            <div className='loan'>
                <div className='text'>
                    <h4>EMPRÉSTIMO</h4>
                    <h2 className='gradient-text'> Conheça as opções </h2>
                    <p> Dinheiro na sua conta! </p>
                    <p> Precisando daquela ajuda extra? </p>
                    <br />
                    <p> O crédito que você precisa, com a segurança certa. </p>

                    <img src="icon-cartao.png" alt="" className='img-cartao'/>
                </div>

                {/* <div className='block1'></div> */}
                <div className='block2'>
                    <p>Crédito Parcelado</p>
                    <ul>
                        <li> Tem até 72 meses para pagar;</li> 
                        <li> Pode pagar a 1ª parcela em até 90 dias;</li> 
                        <li> Não afeta o limite do cartão de crédito;</li> 
                        <li> O dinheiro cai na hora na sua conta;</li> 
                        <li> Valor aprovado conforme renda mensal;</li> 
                        <li> Sujeito a análise de crédito.</li>
                    </ul>
                </div>
                <div className='block3'>
                    <p>Emprestimo Pessoal</p>
                    <ul>
                        <li> Tem até 48 meses para pagar; </li> <br />
                        <li> Pode pagar a 1ª parcela em até 90 dias; </li> <br />
                        <li> Parcelas pagas via débito automático; </li> <br />
                        <li> Sujeito a análise de crédito. </li>
                    </ul>
                </div>

            </div>

            <div class="hero photo-1 parallax"></div>

        </>
    );
}

export default Loan;