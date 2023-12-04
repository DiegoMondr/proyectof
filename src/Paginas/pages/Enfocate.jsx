import React from 'react';
import '../styles/pags.css';

const Enfocate = () => {
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

                }}>Enfocate por Cal NewPort</h1>
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
                    }}>Contenido</h2>
                    <p>
                    Cal Newport, profesor de informática en la Universidad de Georgetown, se ha ganado reconocimiento por su investigación sobre cómo las personas pueden mejorar su rendimiento intelectual al cultivar la habilidad de enfocarse en lo que él llama "concentración profunda". <br/>
                    En un mundo donde la constante estimulación digital ha llevado a muchos a adoptar hábitos de atención fragmentada, Newport defiende una filosofía que prioriza la inmersión total en una sola tarea, permitiendo así la producción de trabajos de mayor calidad y profundidad.<br/>
                    Su enfoque se aleja del paradigma común que promueve la multitarea y aboga por un retorno a la concentración profunda y deliberada, donde la calidad y la excelencia en el trabajo se vuelven posibles a través de la dedicación y la atención plena en una tarea a la vez. <br/>
                    Newport desafía la idea de que la eficacia radica en hacer más cosas en menos tiempo, proponiendo en cambio que la clave para el éxito radica en la capacidad de enfocarse en una tarea durante períodos prolongados, eliminando así la constante interrupción de distracciones.<br/>
                    En su obra "Deep Work: Rules for Focused Success in a Distracted World" (Trabajo profundo: reglas para el éxito enfocado en un mundo distraído), Newport presenta estrategias prácticas para cultivar la concentración profunda en un entorno moderno que constantemente nos empuja hacia la fragmentación de la atención. <br/>
                    Desde sugerir la programación de bloques de tiempo dedicados exclusivamente a tareas sin distracciones hasta cuestionar el valor real de la conectividad constante, su enfoque despierta un diálogo crítico sobre cómo maximizar nuestra productividad y calidad de trabajo en un mundo cada vez más caótico y digitalizado.<br/>   
                    </p>
                    
                    
                </div>
            </div>
        </div>
    );
};

export default Enfocate;