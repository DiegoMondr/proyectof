//Mexamen.jsx
import React,{useState} from 'react';

const Mexamen = () => {
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
                <p>¿Qué tipo de relación valoras más en tu cultura?</p>
                <label>
                    <input type="radio" name="q1" value="a"/> a) Una cultura centrada en la individualidad y la independencia. <br/>
                </label>
                <label>
                    <input type="radio" name="q1" value="b"/> b) Una cultura que enfatiza la importancia de la familia y la comunidad.<br/>
                </label>
            </li>
            <li>
                <p>¿Cómo sueles expresar tus emociones en situaciones sociales?</p>
                <label>
                    <input type="radio" name="q2" value="a"/> a) Soy expresivo/a y suelo mostrar mis emociones abiertamente.<br/>
                </label>
                <label>
                    <input type="radio" name="q2" value="b"/> b) Prefiero mantener mis emociones más reservadas y controladas en público.<br/>
                </label>
            </li>
            <li>
                <p>¿Qué tipo de actitud hacia la puntualidad se considera más importante en tu cultura?</p>
                <label>
                    <input type="radio" name="q3" value="a"/> a) La puntualidad es importante, pero a veces hay cierta flexibilidad.<br/>
                </label>
                <label>
                    <input type="radio" name="q3" value="b"/> b) La puntualidad es crucial y se valora mucho en la cultura.<br/>
                </label>
            </li>
            <li>
                <p>¿Qué importancia tiene el concepto de "respeto a la autoridad" en tu cultura?</p>
                <label>
                    <input type="radio" name="q4" value="a"/> a) Se respeta, pero se cuestiona si es necesario.<br/>
                </label>
                <label>
                    <input type="radio" name="q4" value="b"/> b) Se considera un valor fundamental y se muestra con reverencia.<br/>
                </label>
            </li>
            <li>
                <p>¿Cómo se valora el trabajo en equipo en tu cultura?</p>
                <label>
                    <input type="radio" name="q5" value="a"/> a) El trabajo individual es más valorado.<br/>
                </label>
                <label>
                    <input type="radio" name="q5" value="b"/> b) Se valora mucho el trabajo en equipo y la colaboración.<br/>
                </label>
            </li>
            <li>
                <p>¿Cómo se percibe la comunicación no verbal en tu cultura?</p>
                <label>
                    <input type="radio" name="q6" value="a"/> a) Es importante, pero a veces puede ser ambigua.<br/>
                </label>
                <label>
                    <input type="radio" name="q6" value="b"/> b) Es muy relevante y se considera una parte esencial de la comunicación.<br/>
                </label>
            </li>
            <li>
                <p>¿Cuál de las siguientes descripciones se acerca más a la relación con la naturaleza en tu cultura?</p>
                <label>
                    <input type="radio" name="q7" value="a"/> a) Existe una conexión con la naturaleza, pero no es tan prominente en la vida diaria.<br/>
                </label>
                <label>
                    <input type="radio" name="q7" value="b"/> b) La relación con la naturaleza es muy significativa y se integra en muchos aspectos de la vida cotidiana.<br/>
                </label>
            </li>
            <li>
                <p>¿Qué tan importante es la religión en tu cultura?</p>
                <label>
                    <input type="radio" name="q8" value="a"/> a) No es muy importante, la religión no es un aspecto central de la cultura.<br/>
                </label>
                <label>
                    <input type="radio" name="q8" value="b"/> b) Es muy importante, la religión es un aspecto central de la cultura.<br/>
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
    
    export default Mexamen;