import { createContext, useState, ReactNode } from "react";
import challenges from '../../challenges.json';

interface ChallengesContextData {
  level: number;
  levelUp: VoidFunction;
  currentExperience: number;
  challengesCompleted: number;
  startNewChallenge: VoidFunction;
}

interface ChallengesProviderProps {
  children: ReactNode;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider(props: ChallengesProviderProps) {
  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(0);
  const [challengesCompleted, setChallengesCompleted] = useState(0);

  const data = {
    level,
    levelUp,
    currentExperience,
    challengesCompleted,
    startNewChallenge,
  };

  function levelUp() {
    setLevel(level + 1);
  }

  function startNewChallenge() {
    const challengeList = challenges;

    const random = Math.floor(Math.random() * challengeList.length);
    console.log(random, challengeList[random]);
  }

  return (
    <ChallengesContext.Provider value={data}>
      {props.children}
    </ChallengesContext.Provider>
  );
}