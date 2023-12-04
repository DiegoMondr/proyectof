import React from 'react';
import '../styles/pags.css';

const Kaskag = () => {
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

                }}>Kasuga & Kenji</h1>
                Contenido de la pagina
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
                    }}>Decalogo de Kasuga</h2>
                    <p>
                    Valores Arraigados: <br/>
                    Disciplina y Constancia:<br/>
                    Aprendizaje Continuo:<br/>
                     Enfoque en la Calidad:<br/>
                    Humildad y Escucha Activa:<br/>
                    Empatía y Atención al Cliente:<br/>
                   Innovación y Creatividad:<br/>
                    Trabajo en Equipo y Colaboración:<br/>
                    Planificación Estratégica:<br/>
                    Generosidad y Responsabilidad Social:<br/>
                    
                    </p>
                    
                </div>
                <div className='right'>
                    <h2 style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            color:'#250940',
            fontSize:'50px'
                    }}>Decalogo de Kenji</h2>
                    <p>
                    No te creas pobre, porque la pobreza no es una condición, sino una mentalidad. <br/>
                   Sé disciplinado, porque la disciplina es la clave del éxito y la felicidad. <br/>
                    No te conformes con lo que tienes, sino que busca siempre mejorar y crecer. <br/>
                    No seas individualista, sino que trabaja en equipo y ayuda a los demás. <br/>
                     No seas pesimista, sino que ten fe y esperanza en el futuro. <br/>
                    Valora tu cultura y tu país, porque tienen mucho que ofrecer al mundo. <br/>
                    Respeta y aprende de otras culturas, porque tienen mucho que enseñarte. <br/>
                    Sé creativo e innovador, porque el mundo necesita de tus ideas y soluciones. <br/>
                    Sé honesto y responsable, porque tu palabra y tu acción tienen un impacto en la sociedad. <br/>
                    Sé feliz y agradecido, porque la vida es un regalo y una oportunidad. <br/>
                   
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Kaskag;