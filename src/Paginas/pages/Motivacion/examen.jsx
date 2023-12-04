//Examen.jsx
import React, {useState} from 'react';

const Examen = () => {
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
      <h1>Examen sobre Motivacion</h1>
        <form onSubmit={handleSubmit}>
          <ol>
          <li>
                <p>¿Qué tan importante crees que es tener metas claras para sentirte motivado/a?</p>
                <label>
                    <input type="radio" name="q1" value="a"/> a) Esencial, mis metas son mi principal motor de motivación. <br/>
                </label>
                <label>
                    <input type="radio" name="q1" value="b"/> b) Importante, pero a veces me cuesta establecer metas concretas.<br/>
                </label>
                <label>
                    <input type="radio" name="q1" value="c"/> c) Moderadamente importante, no siempre necesito metas claras para sentirme motivado/a.<br/>
                </label>
                <label>
                    <input type="radio" name="q1" value="d"/> d) No creo que las metas tengan mucho impacto en mi motivación.<br/>
                </label>
            </li>
            <li>
                <p>¿Cómo reaccionas frente a los desafíos o dificultades al perseguir tus metas?</p>
                <label>
                    <input type="radio" name="q2" value="a"/> a) Los veo como oportunidades para crecer y me motivan a esforzarme más.<br/>
                </label>
                <label>
                    <input type="radio" name="q2" value="b"/> b) A veces me desaliento, pero suelo encontrar maneras de superarlos.<br/>
                </label>
                <label>
                    <input type="radio" name="q2" value="c"/> c) Depende de la dificultad; a veces me siento abrumado/a.<br/>
                </label>
                <label>
                    <input type="radio" name="q2" value="d"/> d) Suelo rendirme fácilmente frente a los desafíos.<br/>
                </label>
            </li>
            <li>
                <p>¿Qué tanto crees en tu capacidad para alcanzar tus metas?</p>
                <label>
                    <input type="radio" name="q3" value="a"/> a) Creo firmemente en mi capacidad para lograr lo que me propongo.<br/>
                </label>
                <label>
                    <input type="radio" name="q3" value="b"/> b) Tengo confianza en mis habilidades, pero a veces dudo.<br/>
                </label>
                <label>
                    <input type="radio" name="q3" value="c"/> c) A veces me siento inseguro/a sobre si podré alcanzar mis metas.<br/>
                </label>
                <label>
                    <input type="radio" name="q3" value="d"/> d) No confío mucho en mi capacidad para lograr lo que deseo.<br/>
                </label>
            </li>
            <li>
                <p>¿Cómo te afecta el entorno social en tu motivación?</p>
                <label>
                    <input type="radio" name="q4" value="a"/> a) Mi entorno social influye positivamente en mi motivación.<br/>
                </label>
                <label>
                    <input type="radio" name="q4" value="b"/> b) Puede influir, pero mi motivación principal viene de dentro.<br/>
                </label>
                <label>
                    <input type="radio" name="q4" value="c"/> c) A veces mi entorno social me desmotiva.<br/>
                </label>
                <label>
                    <input type="radio" name="q4" value="d"/> d) No siento que mi entorno social tenga un impacto significativo en mi motivación.<br/>
                </label>
            </li>
            <li>
                <p>¿Qué tanto disfrutas el proceso para alcanzar tus metas, más allá de la meta en sí?</p>
                <label>
                    <input type="radio" name="q5" value="a"/> a) Disfruto cada paso del camino hacia mis metas.<br/>
                </label>
                <label>
                    <input type="radio" name="q5" value="b"/> b) A veces me enfoco demasiado en la meta y descuido el proceso.<br/>
                </label>
                <label>
                    <input type="radio" name="q5" value="c"/> c) No suelo disfrutar mucho del proceso; solo quiero alcanzar la meta final.<br/>
                </label>
                <label>
                    <input type="radio" name="q5" value="d"/> d) No me importa mucho el proceso; solo me interesa el resultado.<br/>
                </label>
            </li>
            <li>
                <p>¿Qué tan importante es la recompensa o el reconocimiento externo para mantenerte motivado/a?</p>
                <label>
                    <input type="radio" name="q6" value="a"/> a) No es muy importante, mi motivación viene principalmente de satisfacer mis propias expectativas.<br/>
                </label>
                <label>
                    <input type="radio" name="q6" value="b"/> b) A veces me ayuda, pero no es lo más importante.<br/>
                </label>
                <label>
                    <input type="radio" name="q6" value="c"/> c) Es bastante importante, necesito recompensas o reconocimiento para mantenerme motivado/a.<br/>
                </label>
                <label>
                    <input type="radio" name="q6" value="d"/> d) Esencial, mi motivación depende en gran medida de la validación externa.<br/>
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
    
    export default Examen;