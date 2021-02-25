import { useEffect, useState } from "react";

//styles
import styles from "../styles/components/Countdown.module.css";

export function Countdown() {
  const [time, setTime] = useState(25 * 60); //25 minutos em segundos
  const [active, setActive] = useState(false);

  const minutes = Math.floor(time / 60); //pega apenas os minutos do time
  const seconds = time % 60; //pega os segundos (resto da divisão time/60)

  /**
   * padStart verifica se minutes tem 2 caracteres, se não tiver, preenche a
   * string com '0' até ocupar 2 caracteres
   * 
   * depois, split divide a string em 2 partes, retornando um array
   */
  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  useEffect(() => {
    if (active && time > 0) {
      setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    }
  }, [active, time]);

  function handlerStartCountdown() {
    setActive(true);
  }

  return (
    <>
      <div className={styles.countdownContainer}>
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

      <button type="button" onClick={handlerStartCountdown} className={styles.countdownButton}>
        Iniciar um ciclo
        <img src="icons/vercel.svg" alt=""/>
      </button>
    </>
  );
}
