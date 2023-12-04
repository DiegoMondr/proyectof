//Eexamen.jsx
import React, {useState} from 'react';

const Eexamen = () => {
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const answers = ['b', 'c', 'b', 'b', 'c', 'c', 'b', 'c']; // Respuestas correctas
    let userScore = 0;

    for (let i = 1; i <= 8; i++) {
      const selectedAnswer = document.querySelector(`input[name="q${i}"]:checked`);

      if (selectedAnswer) {
        if (selectedAnswer.value === answers[i - 1]) {
          userScore++;
        }
      }
    }

    setScore(userScore);
    setShowScore(true);
  };

 

  return (
    <section>
      <h1>Examen sobre Enfocate</h1>
        <form onSubmit={handleSubmit}>
          <ol>
          <li>
                <p>Cuando trabajas en un proyecto importante, ¿sueles eliminar distracciones fácilmente?</p>
                <label>
                    <input type="radio" name="q1" value="a"/> a) Sí, tengo la habilidad de mantenerme enfocado/a sin problemas. <br/>
                </label>
                <label>
                    <input type="radio" name="q1" value="a"/> b) Mayormente sí, pero a veces me distraigo. <br/>
                </label>
                <label>
                    <input type="radio" name="q1" value="a"/> c) Sí, Depende del proyecto, a veces me cuesta concentrarme. <br/>
                </label>
                <label>
                    <input type="radio" name="q1" value="a"/> d) Suelo distraerme con frecuencia. <br/>
                </label>
            </li>   
            <li>
                <p>¿Cómo manejas tus tareas diarias?</p>
                <label>
                    <input type="radio" name="q2" value="a"/> a) Tengo una estrategia clara y priorizo mis tareas de acuerdo a su importancia. <br/>
                </label>
                <label>
                    <input type="radio" name="q2" value="a"/> b) En su mayoría, intento organizarme, pero a veces me disperso. <br/>
                </label>
                <label>
                    <input type="radio" name="q2" value="a"/> c) Tiendo a hacer lo que se presenta en el momento sin mucha planificación. <br/>
                </label>
                <label>
                    <input type="radio" name="q2" value="a"/> d) No tengo un enfoque claro y suelo postergar las cosas. <br/>
                </label>
            </li>
            <li>
                <p>¿Cómo gestionas las interrupciones cuando estás concentrado/a en una tarea?</p>
                <label>
                    <input type="radio" name="q3" value="a"/> a) Las minimizo; trato de evitarlas o manejarlas rápidamente. <br/>
                </label>
                <label>
                    <input type="radio" name="q3" value="a"/> b) A veces me resulta difícil mantenerme enfocado/a debido a las interrupciones. <br/>
                </label>
                <label>
                    <input type="radio" name="q3" value="a"/> c) Las interrupciones a menudo rompen mi concentración. <br/>
                </label>
                <label>
                    <input type="radio" name="q3" value="a"/> d) Me distraigo fácilmente y me cuesta retomar mi enfoque después de una interrupción. <br/>
                </label>
            </li>
            <li>
                <p>¿Tienes un horario o rutina establecida para tus momentos de máxima concentración?</p>
                <label>
                    <input type="radio" name="q4" value="a"/> a) Sí, tengo un horario específico y respeto esos momentos para tareas importantes. <br/>
                </label>
                <label>
                    <input type="radio" name="q4" value="a"/> b) Intento tener un horario, pero a veces no puedo cumplirlo. <br/>
                </label>
                <label>
                    <input type="radio" name="q4" value="a"/> c) No tengo un horario definido; trabajo cuando puedo. <br/>
                </label>
                <label>
                    <input type="radio" name="q4" value="a"/> d) No tengo una rutina para enfocarme en tareas específicas. <br/>
                </label>
            </li>
            <li>
                <p>¿Cómo manejas la multitarea?</p>
                <label>
                    <input type="radio" name="q5" value="a"/> a) Evito la multitarea y me concentro en una tarea a la vez. <br/>
                </label>
                <label>
                    <input type="radio" name="q5" value="a"/> b) Intento no hacer multitarea, pero a veces me veo obligado/a. <br/>
                </label>
                <label>
                    <input type="radio" name="q5" value="a"/> c) A veces me encuentro haciendo varias cosas a la vez. <br/>
                </label>
                <label>
                    <input type="radio" name="q5" value="a"/> d) Suelo hacer multitarea constantemente. <br/>
                </label>
            </li>
            <li>
                <p>¿Qué tan consciente eres de la importancia de mantener un enfoque claro en tus objetivos?</p>
                <label>
                    <input type="radio" name="q6" value="a"/> a) Muy consciente, siempre me esfuerzo por mantener mi enfoque en metas específicas. <br/>
                </label>
                <label>
                    <input type="radio" name="q6" value="a"/> b) Soy consciente, pero a veces me desvío de mis objetivos. <br/>
                </label>
                <label>
                    <input type="radio" name="q6" value="a"/> c) A veces pierdo de vista mis objetivos. <br/>
                </label>
                <label>
                    <input type="radio" name="q6" value="a"/> d) No suelo tener metas claras ni enfocarme en ellas. <br/>
                </label>
            </li> 
          </ol>
        <input type="submit" value="Calificar" />
      </form>

      {showScore && (
        <div id="result">
          <h2>Resultado</h2>
          <p>
            Tu puntuación es: <span>{score}</span> / 8
          </p>
        </div>
      )}
    </section>
  );
};
    
    export default Eexamen;