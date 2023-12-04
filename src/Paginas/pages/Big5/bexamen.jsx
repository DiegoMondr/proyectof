//Bexamen.jsx
import React,{useState} from 'react';

const Bexamen = () => {
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
                <p>¿Con qué frecuencia tiendes a socializar con nuevas personas?</p>
                <label>
                    <input type="radio" name="q1" value="a"/> a) Muy a menudo <br/>
                </label>
                <label>
                    <input type="radio" name="q1" value="b"/> b) Con regularidad <br/>
                </label>
                <label>
                    <input type="radio" name="q1" value="c"/> c) Ocasionalmente <br/>
                </label>
                <label>
                    <input type="radio" name="q1" value="d"/> d) Raramente <br/>
                </label>
                <label>
                    <input type="radio" name="q1" value="e"/> e) Casi nunca <br/>
                </label>
            </li>
            <li>
                <p>¿Eres alguien que tiende a planificar las cosas o prefieres la espontaneidad?</p>
                <label>
                    <input type="radio" name="q2" value="a"/> a) Siempre planifico todo <br/>
                </label>
                <label>
                    <input type="radio" name="q2" value="b"/> b) Planifico la mayoría de las veces <br/>
                </label>
                <label>
                    <input type="radio" name="q2" value="c"/> c) A veces planifico, a veces soy espontáneo/a <br/>
                </label>
                <label>
                    <input type="radio" name="q2" value="d"/> d) Prefiero ser espontáneo/a <br/>
                </label>
                <label>
                    <input type="radio" name="q2" value="e"/> e) Siempre prefiero la espontaneidad <br/>
                </label>
            </li>
            <li>
                <p>¿Qué tan abierto/a eres a probar nuevas experiencias o actividades?</p>
                <label>
                    <input type="radio" name="q3" value="a"/> a) Siempre estoy dispuesto/a a probar cosas nuevas <br/>
                </label>
                <label>
                    <input type="radio" name="q3" value="b"/> b) Me gusta probar cosas nuevas a menudo <br/>
                </label>
                <label>
                    <input type="radio" name="q3" value="c"/> c) Estoy abierto/a a nuevas experiencias, pero con moderación <br/>
                </label>
                <label>
                    <input type="radio" name="q3" value="d"/> d) Prefiero lo familiar y conocido <br/>
                </label>
                <label>
                    <input type="radio" name="q3" value="e"/> e) Me resisto a probar cosas nuevas <br/>
                </label>
            </li>
            <li>
                <p>¿Eres alguien que tiende a preocuparse mucho o te consideras tranquilo/a?</p>
                <label>
                    <input type="radio" name="q4" value="a"/> a) Tiendo a preocuparme mucho <br/>
                </label>
                <label>
                    <input type="radio" name="q4" value="b"/> b) A veces me preocupo, pero generalmente soy tranquilo/a <br/>
                </label>
                <label>
                    <input type="radio" name="q4" value="c"/> c) Soy moderadamente preocupado/a <br/>
                </label>
                <label>
                    <input type="radio" name="q4" value="d"/> d) No me preocupo mucho <br/>
                </label>
                <label>
                    <input type="radio" name="q4" value="e"/> e) Soy muy tranquilo/a <br/>
                </label>
            </li>
            <li>
                <p>¿Qué tanto te consideras una persona sociable y extrovertida?</p>
                <label>
                    <input type="radio" name="q5" value="a"/> a) Muy extrovertido/a <br/>
                </label>
                <label>
                    <input type="radio" name="q5" value="b"/> b) Bastante extrovertido/a <br/>
                </label>
                <label>
                    <input type="radio" name="q5" value="c"/> c) Moderadamente extrovertido/a <br/>
                </label>
                <label>
                    <input type="radio" name="q5" value="d"/> d) Ligeramente introvertido/a <br/>
                </label>
                <label>
                    <input type="radio" name="q5" value="e"/> e) Muy introvertido/a <br/>
                </label>
            </li>
            <li>
                <p>¿Eres una persona organizada en tu vida diaria y en tus espacios?</p>
                <label>
                    <input type="radio" name="q6" value="a"/> a) Extremadamente organizado/a <br/>
                </label>
                <label>
                    <input type="radio" name="q6" value="b"/> b) Bastante organizado <br/>
                </label>
                <label>
                    <input type="radio" name="q6" value="c"/> c) Moderadamente organizado/a <br/>
                </label>
                <label>
                    <input type="radio" name="q6" value="d"/> d) Ligeramente desorganizado/a <br/>
                </label>
                <label>
                    <input type="radio" name="q6" value="e"/> e) Muy desorganizado/a <br/>
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
    
    export default Bexamen;