import React from 'react';
import '../styles/pags.css';

const Herrpcf = () => {
    return (
        <div className="main" style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column'
        
        }}>
            <div className='title' style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            color:'#250940'

            }}>
                <h1 style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            color:'#250940',
            fontSize:'80px'

                }}>Herramientas de Calidad</h1>
            </div>
            <div className='content'>
                <div className='text'>
                    <h2 style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            color:'#250940',
            fontSize:'50px'
                    }}>Herramientas comunes</h2>
                    <p style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            color:'grey',
            fontSize:'20px'
                    }}>
                    Herramienta de Ishikawa: <br />También conocida como diagrama de causa-efecto, ayuda a identificar las causas raíz de un problema. <br />
                    Herramienta de Pareto: <br />También conocida como diagrama de distribución de frecuencias, ayuda a identificar las causas más importantes de un problema.<br />
                    Herramienta CTQ:<br /> También conocida como especificación de los requisitos del cliente, ayuda a definir los requisitos que deben cumplir los productos o servicios para satisfacer las necesidades de los clientes.<br />
                    Herramienta FODA: <br />También conocida como análisis DAFO, ayuda a evaluar las fortalezas, debilidades, oportunidades y amenazas de una empresa o organización.<br />
                    </p>
                    
                </div>
                <div className='text'>
                    <h2 style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            color:'#250940',
            fontSize:'50px'
                    }}>Uso de las Herramientas</h2>
                    <p style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            color:'grey',
            fontSize:'20px'
                    }}>
                    Mejora de la calidad de los productos o servicios <br />
                    Reducción de los costes <br />
                    Incremento de la productividad <br />
                    Mejora de la satisfacción del cliente <br />
                    Las herramientas de calidad son una parte esencial de cualquier programa de mejora de la calidad. Al utilizar estas herramientas, las empresas y organizaciones pueden identificar y resolver problemas de manera eficaz, lo que les permite mejorar su rendimiento y alcanzar sus objetivos.<br />


                    </p>
                    
                </div>
            </div>
        </div>
    );
};

export default Herrpcf;