//Hexamen.jsx
import React,{ useState} from 'react';

const Hexamen = () => {
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const answers = ['a', 'a', 'b', 'c', 'd', 'a', 'a', 'a','a','c']; // Respuestas correctas
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
      <h1>Examen sobre Herramientas de calidad</h1>
        <form onSubmit={handleSubmit}>
          <ol>
          <li>
                <p>¿Cuál de las siguientes es una herramienta de calidad?</p>
                <label>
                    <input type="radio" name="q1" value="a"/> a) Diagrama de Ishikawa <br/>
                </label>
                <label>
                    <input type="radio" name="q1" value="b"/> b) Diagrama de Pareto<br/>
                </label>
                <label>
                    <input type="radio" name="q1" value="c"/> c) Especificación de los requisitos del cliente (CTQ)<br/>
                </label>
                <label>
                    <input type="radio" name="q1" value="d"/> d) Análisis FODA<br/>
                </label>

            </li>
            <li>
                <p>¿Cuál es el objetivo de la herramienta de Ishikawa?</p>
                <label>
                    <input type="radio" name="q2" value="a"/> a) Identificar las causas raíz de un problema<br/>
                </label>
                <label>
                    <input type="radio" name="q2" value="b"/> b) Identificar las causas más importantes de un problema<br/>
                </label>
                <label>
                    <input type="radio" name="q2" value="c"/> c) Definir los requisitos que deben cumplir los productos o servicios<br/>
                </label>
                <label>
                    <input type="radio" name="q2" value="d"/> d) Evaluar las fortalezas, debilidades, oportunidades y amenazas de una empresa o organización<br/>
                </label>
            </li>
            <li>
                <p>¿Cuál es el objetivo de la herramienta de Pareto?</p>
                <label>
                    <input type="radio" name="q3" value="a"/> a) Identificar las causas raíz de un problema<br/>
                </label>
                <label>
                    <input type="radio" name="q3" value="b"/> b) Identificar las causas más importantes de un problema<br/>
                </label>
                <label>
                    <input type="radio" name="q3" value="c"/> c) Definir los requisitos que deben cumplir los productos o servicios<br/>
                </label>
                <label>
                    <input type="radio" name="q3" value="d"/> d) Evaluar las fortalezas, debilidades, oportunidades y amenazas de una empresa o organización<br/>
                </label>
            </li>
            <li>
                <p>¿Cuál es el objetivo de la herramienta CTQ?</p>
                <label>
                    <input type="radio" name="q4" value="a"/> a) Identificar las causas raíz de un problema<br/>
                </label>
                <label>
                    <input type="radio" name="q4" value="b"/> b) Identificar las causas más importantes de un problema<br/>
                </label>
                <label>
                    <input type="radio" name="q4" value="c"/> c) Definir los requisitos que deben cumplir los productos o servicios<br/>
                </label>
                <label>
                    <input type="radio" name="q4" value="d"/> d) Evaluar las fortalezas, debilidades, oportunidades y amenazas de una empresa o organización<br/>
                </label>
            </li>
            <li>
                <p>¿Cuál es el objetivo de la herramienta FODA?</p>
                <label>
                    <input type="radio" name="q5" value="a"/> a) Identificar las causas raíz de un problema<br/>
                </label>
                <label>
                    <input type="radio" name="q5" value="b"/> b) Identificar las causas más importantes de un problema<br/>
                </label>
                <label>
                    <input type="radio" name="q5" value="c"/> c) Definir los requisitos que deben cumplir los productos o servicios<br/>
                </label>
                <label>
                    <input type="radio" name="q5" value="d"/> d) Evaluar las fortalezas, debilidades, oportunidades y amenazas de una empresa o organización<br/>
                </label>
            </li>
            <li>
                <p>¿Qué es una causa raíz?</p>
                <label>
                    <input type="radio" name="q6" value="a"/> a) Un factor que contribuye al problema<br/>
                </label>
                <label>
                    <input type="radio" name="q6" value="b"/> b) Un factor que es la causa directa del problema<br/>
                </label>
                <label>
                    <input type="radio" name="q6" value="c"/> c) Un factor que es la causa indirecta del problema<br/>
                </label>
                <label>
                    <input type="radio" name="q6" value="d"/> d) Un factor que no contribuye al problema<br/>
                </label>
            </li>
            <li>
                <p>¿Qué es un diagrama de Pareto?</p>
                <label>
                    <input type="radio" name="q7" value="a"/> a) Un diagrama que muestra la frecuencia de ocurrencia de las causas de un problema<br/>
                </label>
                <label>
                    <input type="radio" name="q7" value="b"/> b) Un diagrama que muestra la importancia de las causas de un problema<br/>
                </label>
                <label>
                    <input type="radio" name="q7" value="c"/> c) Un diagrama que muestra las causas más importantes de un problema<br/>
                </label>
                <label>
                    <input type="radio" name="q7" value="d"/> d) Un diagrama que muestra las causas raíz de un problema<br/>
                </label>
            </li>
            <li>
                <p>¿Qué es una especificación de los requisitos del cliente (CTQ)?</p>
                <label>
                    <input type="radio" name="q8" value="a"/> a) Un requisito que debe cumplir un producto o servicio para satisfacer las necesidades del cliente<br/>
                </label>
                <label>
                    <input type="radio" name="q8" value="b"/> b) Un requisito que debe cumplir un producto o servicio para satisfacer las necesidades del proveedor<br/>
                </label>
                <label>
                    <input type="radio" name="q8" value="c"/> c) Un requisito que debe cumplir un producto o servicio para satisfacer las necesidades de la empresa<br/>
                </label>
                <label>
                    <input type="radio" name="q8" value="d"/> d) Un requisito que debe cumplir un producto o servicio para satisfacer las necesidades del mercado<br/>
                </label>
              </li>
              <li>
                <p>¿Qué es una fortaleza?</p>
                <label>
                  <input type="radio" name='q9' value="a" /> a) Un factor interno que le da una ventaja competitiva a una empresa o organización<br/>
                </label>
                <label>
                  <input type="radio" name='q9' value="b" /> b) Un factor interno que puede obstaculizar el éxito de una empresa o organización<br/>
                </label>
                <label>
                  <input type="radio" name='q9' value="c" /> c)Un factor externo que puede beneficiar a una empresa o organización<br/>
                </label>
                <label>
                  <input type="radio" name='q9' value="d" /> d) Un factor externo que puede dañar a una empresa o organización<br/>
                </label>
              </li>
              <li>
                <p>¿Qué es una oportunidad?</p>
                <label>
                  <input type="radio" name='q10' value="a" /> a) Un factor interno que le da una ventaja competitiva a una empresa o organización<br/>
                </label>
                <label>
                  <input type="radio" name='q10' value="b" /> b) Un factor interno que puede obstaculizar el éxito de una empresa o organización<br/>
                </label>
                <label>
                  <input type="radio" name='q10' value="c" /> c) Un factor externo que puede beneficiar a una empresa o organizaciónv<br/>
                </label>
                <label>
                  <input type="radio" name='q10' value="d" />d) Un factor externo que puede dañar a una empresa o organización<br/>
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
    export default Hexamen;