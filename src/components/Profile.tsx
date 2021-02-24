//styles
import styles from "../styles/components/Profile.module.css";

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/martnght12.png" alt="Vinicius Victor" />

      <div>
        <strong>Vinicius Victor</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level 19
        </p>
      </div>
    </div>
  );
}
