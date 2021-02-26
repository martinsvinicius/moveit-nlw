import { useContext, useEffect, useState } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";

//styles
import styles from "../styles/components/Countdown.module.css";

let countdownTimeout: NodeJS.Timeout;

export function Countdown() {
  const { startNewChallenge } = useContext(ChallengesContext);

  const initialTime = 0.05 * 60;
  const [time, setTime] = useState(initialTime); //25 minutos em segundos
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60); //pega apenas os minutos do time
  const seconds = time % 60; //pega os segundos (resto da divisão time/60)

  /**
   * padStart verifica se minutes tem 2 caracteres, se não tiver, preenche a
   * string com '0' até ocupar 2 caracteres
   *
   * depois, split divide a string em 2 partes, retornando um array
   */
  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
  const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("");

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      setHasFinished(true);
      setIsActive(false);
      startNewChallenge();
    }
  }, [isActive, time]);

  function handlerStartCountdown() {
    setIsActive(true);
  }

  function handlerResetCountdown() {
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setTime(initialTime);
  }

  return (
    <div className={styles.countdownContainer}>
      <div className={styles.timerContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>

        <span>:</span>

        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      {hasFinished ? (
        <button disabled>Ciclo encerrado</button>
      ) : (
        <button
          type="button"
          onClick={isActive ? handlerResetCountdown : handlerStartCountdown}
          className={isActive ? styles.cancelCountdown : styles.startCountdown}
        >
          {isActive ? "Abandonar ciclo" : "Iniciar um ciclo"}
        </button>
      )}
    </div>
  );
}
