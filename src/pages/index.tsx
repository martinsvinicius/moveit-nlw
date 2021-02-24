import { CompletedChallengers } from "../components/CompletedChallengers";
import { ExperienceBar } from "../components/ExpericenceBar";
import { Profile } from "../components/Profile";

//styles
import styles from '../styles/pages/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <ExperienceBar />

      <section>
        <div className={styles.leftContainer}>
          <Profile />
          <CompletedChallengers />
        </div>
        <div>
          <h1>Desafios</h1>
        </div>
      </section>
    </div>
  );
}
