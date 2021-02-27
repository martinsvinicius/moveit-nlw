import { useContext, useEffect, useState } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import { CountdownContext } from "../contexts/CountdownContext";

//styles
import styles from "../styles/components/Countdown.module.css";

export function Countdown() {
  const {
    minutes,
    seconds,
    hasFinished,
    isActive,
    resetCountdown,
    startCountdown,
  } = useContext(CountdownContext);

  /**
   * padStart verifica se minutes tem 2 caracteres, se não tiver, preenche a
   * string com '0' até ocupar 2 caracteres
   *
   * depois, split divide a string em 2 partes, retornando um array
   */
  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
  const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("");

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
          onClick={isActive ? resetCountdown : startCountdown}
          className={isActive ? styles.cancelCountdown : styles.startCountdown}
        >
          {isActive ? "Abandonar ciclo" : "Iniciar um ciclo"}
        </button>
      )}
    </div>
  );
}
