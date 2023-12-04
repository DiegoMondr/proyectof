import '../styles/pags.css';
import React from 'react';

const Big5 = () => {
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

                }}>BIG 5</h1>
            </div>
            <div className='content'>
                <div className='informacion'>
                    <h2 style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            color:'#250940',
            fontSize:'50px'
                    }}>TEST DE PERSONALIDAD</h2>
                    <p>
                    El modelo Big Five o los Cinco Grandes evalúan cinco dimensiones principales de la personalidad: apertura a la experiencia, responsabilidad, extraversión, amabilidad y estabilidad emocional. Aunque no puedo realizar pruebas interactivas directamente, puedo darte una idea de preguntas que podrían relacionarse con cada dimensión: <br/>

                <span style={{
                    fontWeight: 'bold',
                    color:'black'
                }}>Apertura a la experiencia:</span> ¿Disfrutas probando cosas nuevas y aventurándote en lo desconocido? ¿Te interesa explorar diferentes ideas y puntos de vista?<br/>

                <span style={{
                    fontWeight: 'bold',
                    color:'black'
                }}>Responsabilidad:</span> ¿Eres organizado/a y confiable en tus compromisos? ¿Sientes la necesidad de terminar lo que empiezas y te esfuerzas por cumplir con tus responsabilidades?<br/>

                <span style={{
                    fontWeight: 'bold',
                    color:'black'
                }}>Extraversión:</span> ¿Te sientes cómodo/a en situaciones sociales y tiendes a ser enérgico/a y sociable? ¿Te sientes recargado/a estando con otras personas?<br/>

                <span style={{
                    fontWeight: 'bold',
                    color:'black'
                }}>Amabilidad:</span> ¿Eres considerado/a y empático/a con los demás? ¿Te esfuerzas por ayudar a los demás y te preocupas por sus sentimientos?<br/>

                <span style={{
                    fontWeight: 'bold',
                    color:'black'
                }}>Estabilidad emocional:</span> ¿Sueles mantener la calma bajo presión? ¿Te afectan mucho las emociones negativas o tiendes a ser más estable emocionalmente?<br/>

                Estos rasgos pueden variar de una persona a otra y no se consideran puramente buenos o malos, sino que reflejan diferentes formas en las que las personas tienden a interactuar con el mundo que les rodea.<br/>
                    
                    </p>
                    
                </div>
            </div>
        </div>
    );
};

export default Big5;