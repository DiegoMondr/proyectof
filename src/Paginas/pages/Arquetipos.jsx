import '../styles/pags.css';
import React from 'react';


const Arquetipos = () => {
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

                }}>Arquetipos Sistemicos</h1>
            </div>
            <div className='content' >
                <div className='informacion' >
                    <h2 style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            color:'#250940',
            fontSize:'50px'
                    }}>¿Que son los Arquetipos Sistemicos?</h2>
                    <p>
                        Los arquetipos sistémicos son patrones recurrentes de comportamiento, roles o dinámicas presentes en sistemas complejos, como las organizaciones, las familias o incluso la sociedad en general. Estos arquetipos sirven para comprender mejor las interacciones y los comportamientos que emergen en esos sistemas. Algunos ejemplos de arquetipos sistémicos incluyen: <br/>

                        El Chivo Expiatorio: Se refiere a la tendencia a culpar a una persona o grupo específico por los problemas en el sistema, a menudo sin una justificación realista.<br/>

                        El Triángulo Dramático: Incluye los roles de víctima, salvador y verdugo. Este patrón muestra cómo algunas personas pueden asumir estos roles en situaciones de conflicto o crisis.<br/>

                        La Profecía Autocumplida: Ocurre cuando una creencia o expectativa sobre un resultado futuro influye en el comportamiento, llevando a ese resultado a pesar de su validez real.<br/>

                        El Efecto Boomerang: Refleja cómo las acciones o decisiones destinadas a resolver un problema a menudo lo empeoran o tienen efectos negativos no deseados.<br/>

                        La Ley de Jante: Es un principio que describe una actitud colectiva que desalienta el individualismo y la expresión personal, enfocándose en la igualdad y la conformidad.<br/>

                        La Profundidad y la Superficie: Se refiere a la dicotomía entre lo que se muestra en la superficie y lo que realmente está sucediendo en el sistema, especialmente en términos de comunicación y relaciones.<br/>

                        Estos arquetipos pueden proporcionar una visión útil para comprender las dinámicas subyacentes en los sistemas, pero es importante recordar que no todos los sistemas se ajustan perfectamente a estos patrones y que pueden variar en complejidad y manifestación en diferentes contextos.<br/>
                    </p>
                    
                </div>
            </div>
        </div>
    );
};

export default Arquetipos;