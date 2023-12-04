import React from 'react';
import '../styles/pags.css';

const Motivacion = () => {
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

                }}>Psicologia de la Motivacion</h1>
            </div>
            <div className='content'>
                <div className='left'>
                    <h2 style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            color:'#250940',
            fontSize:'50px'
                    }}>Motivacion</h2>
                    <p>
                    La psicología de la motivación es un campo fascinante que explora las fuerzas y los procesos que impulsan nuestros comportamientos, acciones y metas. Examina cómo las personas encuentran la energía y la determinación para alcanzar sus objetivos, y cómo se mantienen enfocadas en medio de desafíos y obstáculos. <br/>
                    <br/>
                    La motivación es un motor interno que impulsa a las personas a perseguir sus deseos y metas, y puede ser intrínseca (proveniente de la satisfacción personal, el interés o la curiosidad) o extrínseca (motivada por recompensas externas como el dinero, la aprobación social o el reconocimiento).<br/>
                    <br/>
                    Desde la perspectiva de la psicología, la motivación está vinculada a múltiples teorías, como la Teoría de la Autodeterminación de Deci y Ryan, que sostiene que la motivación intrínseca es fundamental para la satisfacción y el bienestar, y la Teoría de la Expectativa de Vroom, que se centra en cómo las expectativas de resultado influyen en la motivación.<br/>
                    <br/>
                    El concepto de flujo de Csikszentmihalyi también es relevante en este contexto, ya que describe un estado mental óptimo en el que una persona está completamente inmersa y absorta en una actividad desafiante que proporciona un sentimiento de realización y satisfacción.<br/>
                    <br/>
                    La psicología de la motivación también explora la importancia del establecimiento de metas claras y alcanzables, así como la relevancia del apoyo social y la autoeficacia en la persistencia y el logro de objetivos. Además, comprende cómo factores como la procrastinación, la autodisciplina y la autorregulación afectan la motivación y la capacidad para mantenerse comprometido con las metas a largo plazo.<br/>
                    <br/>
                    En resumen, la psicología de la motivación es un campo diverso y dinámico que busca comprender los impulsores internos y externos que nos llevan a actuar y a persistir en la búsqueda de lo que consideramos valioso, relevante o satisfactorio en nuestras vidas.<br/>
                    </p>
                    
                </div>
            </div>
        </div>
    );
};

export default Motivacion;