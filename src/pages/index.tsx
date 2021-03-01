import Head from "next/head";
import { GetServerSideProps } from "next";

import { CompletedChallengers } from "../components/CompletedChallengers";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExpericenceBar";
import { Profile } from "../components/Profile";
import { ChallengeBox } from "../components/ChallengeBox";

import { CountdownProvider } from "../contexts/CountdownContext";
import { ChallengesProvider } from "../contexts/ChallengesContext";

//styles
import styles from "../styles/pages/Home.module.css";

interface ServerProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number
}

export default function Home(props: ServerProps) {
  return (
    <ChallengesProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    >
      <div className={styles.container}>
        <Head>
          <title>Home | Move.it</title>
        </Head>
        <ExperienceBar />

        <CountdownProvider>
          <section>
            <div className={styles.leftContainer}>
              <Profile />
              <CompletedChallengers />
              <Countdown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>
      </div>
    </ChallengesProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    },
  };
};
