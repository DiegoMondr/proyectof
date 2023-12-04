import React from 'react';
import '../styles/pags.css';

const Talentintegral = () => {
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

                }}>Talento Integral</h1>
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
                    }}>Introduccion</h2>
                    <p>
                    El concepto de "talento integral" abarca una visión holística y multifacética de las habilidades y capacidades humanas. Se refiere a una perspectiva que va más allá de la excelencia en un área específica para considerar el desarrollo equilibrado de diversas aptitudes, habilidades y cualidades que potencian el crecimiento personal y profesional de una persona. <br/>

                    <br/>El talento integral se fundamenta en reconocer y fomentar la diversidad de habilidades de un individuo, buscando un equilibrio entre áreas cognitivas, emocionales, sociales y creativas. Esta noción desafía la idea convencional de talento limitado a habilidades específicas, ampliando la definición para incluir aspectos como la inteligencia emocional, la resolución de problemas, la creatividad, la adaptabilidad y la empatía, entre otros.<br/>

                    <br/>Al promover un enfoque integral hacia el talento, se reconoce que las habilidades técnicas y académicas son importantes, pero también se valora la importancia de las habilidades interpersonales, la capacidad de innovación y la capacidad de enfrentar desafíos con una mentalidad flexible y proactiva.<br/>

                    <br/>El concepto de talento integral implica un viaje de autodescubrimiento y crecimiento continuo, donde las personas pueden explorar y desarrollar sus fortalezas en múltiples áreas, permitiéndoles adaptarse a diferentes situaciones y desempeñarse con excelencia en diversos contextos.<br/>

                    <br/>Esta comprensión del talento integral reconoce la singularidad de cada individuo y la riqueza que proviene de una combinación única de habilidades, propiciando así un enfoque más inclusivo y completo en la evaluación y desarrollo del potencial humano.<br/>
                    </p>
                    
                </div>
            </div>
        </div>
    );
};

export default Talentintegral;