import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";

//styles
import styles from "../styles/components/LevelUpModal.module.css";

export function LevelUpModal() {
  const { level, closeModal } = useContext(ChallengesContext);

  return (
    <div className={styles.overLay}>
      <div className={styles.levelUpModalContainer}>
        <header>{level}</header>

        <strong>Parabéns</strong>
        <p>Você alcançou um novo level.</p>

        <button type="button" onClick={closeModal}>
          <img src="/icons/close.svg" alt="Fechar modal" />
        </button>
      </div>
    </div>
  );
}
