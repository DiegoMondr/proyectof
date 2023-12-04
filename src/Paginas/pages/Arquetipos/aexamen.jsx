//Aexamen.jsx
import React, {useState} from 'react';

const Aexamen = () => {
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
      <h1>Examen sobre Arquetipos más Conocidos</h1>
        <form onSubmit={handleSubmit}>
          <ol>
          <li>
                <p>¿Qué concepto se refiere a la decisión de equilibrar el tiempo invertido en el proceso de toma de decisiones y la demora en la implementación de la acción?</p>
                <label>
                    <input type="radio" name="q1" value="a"/> a) Límites del Crecimiento <br/>
                </label>
                <label>
                    <input type="radio" name="q1" value="b"/> b) Compensación entre Proceso y Demora<br/>
                </label>
                <label>
                    <input type="radio" name="q1" value="c"/> c) Escalada<br/>
                </label>
                <label>
                    <input type="radio" name="q1" value="d"/> d) Éxito para Quien Tiene Éxito<br/>
                </label>
            </li>
            <li>
                <p>¿Cuál es el término que se relaciona con la explotación insostenible de recursos compartidos?</p>
                <label>
                    <input type="radio" name="q2" value="a"/> a) Desplazamiento de la Carga<br/>
                </label>
                <label>
                    <input type="radio" name="q2" value="b"/> b) Soluciones Rápidas que Fallan<br/>
                </label>
                <label>
                    <input type="radio" name="q2" value="c"/> c) Tragedia del Terreno Común<br/>
                </label>
                <label>
                    <input type="radio" name="q2" value="d"/> d) Erosión de Metas<br/>
                </label>
            </li>
            <li>
                <p>¿Qué arquetipo implica la tendencia de algunas personas a depender de la intervención externa en lugar de asumir la responsabilidad personal?</p>
                <label>
                    <input type="radio" name="q3" value="a"/> a) Crecimiento y Subinversión<br/>
                </label>
                <label>
                    <input type="radio" name="q3" value="b"/> b) Caso Especial: Desplazamiento de la Carga Hacia la Intervención<br/>
                </label>
                <label>
                    <input type="radio" name="q3" value="c"/> c) Éxito para Quien Tiene Éxito<br/>
                </label>
                <label>
                    <input type="radio" name="q3" value="d"/> d) Desplazamiento de la Carga<br/>
                </label>
            </li>
            <li>
                <p>¿Cómo se llama el fenómeno en el que el compromiso hacia una meta disminuye gradualmente con el tiempo?</p>
                <label>
                    <input type="radio" name="q4" value="a"/> a) Límites del Crecimiento<br/>
                </label>
                <label>
                    <input type="radio" name="q4" value="b"/> b) Erosión de Metas<br/>
                </label>
                <label>
                    <input type="radio" name="q4" value="c"/> c) Tragedia del Terreno Común<br/>
                </label>
                <label>
                    <input type="radio" name="q4" value="d"/> d) Soluciones Rápidas que Fallan<br/>
                </label>
            </li>
            <li>
                <p>¿Qué arquetipo se relaciona con la búsqueda de soluciones rápidas a problemas complejos que a menudo resultan ineficaces?</p>
                <label>
                    <input type="radio" name="q5" value="a"/> a) Escalada<br/>
                </label>
                <label>
                    <input type="radio" name="q5" value="b"/> b) Crecimiento y Subinversión<br/>
                </label>
                <label>
                    <input type="radio" name="q5" value="c"/> c) Soluciones Rápidas que Fallan<br/>
                </label>
                <label>
                    <input type="radio" name="q5" value="d"/> d) Éxito para Quien Tiene Éxito<br/>
                </label>
            </li>
            <li>
                <p>¿Cuál es el concepto que sugiere que el éxito tiende a generar más éxito?</p>
                <label>
                    <input type="radio" name="q6" value="a"/> a) Desplazamiento de la Carga<br/>
                </label>
                <label>
                    <input type="radio" name="q6" value="b"/> b) Compensación entre Proceso y Demora<br/>
                </label>
                <label>
                    <input type="radio" name="q6" value="c"/> c) Éxito para Quien Tiene Éxito<br/>
                </label>
                <label>
                    <input type="radio" name="q6" value="d"/> d) Tragedia del Terreno Común<br/>
                </label>
            </li>
            <li>
                <p>¿Qué arquetipo se refiere a la decisión de equilibrar el tiempo invertido en el proceso de toma de decisiones y la demora en la implementación de la acción?</p>
                <label>
                    <input type="radio" name="q7" value="a"/> a) Límites del Crecimiento<br/>
                </label>
                <label>
                    <input type="radio" name="q7" value="b"/> b) Soluciones Rápidas que Fallan<br/>
                </label>
                <label>
                    <input type="radio" name="q7" value="c"/> c) Éxito para Quien Tiene Éxito<br/>
                </label>
                <label>
                    <input type="radio" name="q7" value="d"/> d) Compensación entre Proceso y Demora<br/>
                </label>
            </li>
            <li>
                <p>¿Cuál es el término que se relaciona con la idea de que todo sistema tiene límites en cuanto a su capacidad de crecimiento sostenible?</p>
                <label>
                    <input type="radio" name="q8" value="a"/> a) Tragedia del Terreno Común<br/>
                </label>
                <label>
                    <input type="radio" name="q8" value="b"/> b) Crecimiento y Subinversión<br/>
                </label>
                <label>
                    <input type="radio" name="q8" value="c"/> c) Limites del Crecimiento<br/>
                </label>
                <label>
                    <input type="radio" name="q8" value="d"/> d) Erosión de Metas<br/>
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

export default Aexamen;