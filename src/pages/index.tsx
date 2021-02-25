import { CompletedChallengers } from "../components/CompletedChallengers";
import { Countdown } from "../components/CountDown";
import { ExperienceBar } from "../components/ExpericenceBar";
import { Profile } from "../components/Profile";
import { Challenger } from "../components/Challenger";

import Head from 'next/head';

//styles
import styles from '../styles/pages/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home | Move.it</title>
      </Head>
      <ExperienceBar />

      <section>
        <div className={styles.leftContainer}>
          <Profile />
          <CompletedChallengers />
          <Countdown />
        </div>
        <div>
          <Challenger />
        </div>
      </section>
    </div>
  );
}
