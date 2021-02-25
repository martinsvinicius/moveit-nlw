import style from '../styles/components/Challenger.module.css';

export function Challenger() {
  return(
    <div className={style.challengerContainer}>
      <p>Inicie um novo ciclo para receber desafios</p>

      <img src="icons/level-up.svg" alt="Level up"/>

      <p>Avance de level completando os desafios.</p>
    </div>
  );
}