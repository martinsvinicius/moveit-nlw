import { useState, useEffect } from "react";

//styles
import styles from '../styles/components/ExperienceBar.module.css'

export function ExperienceBar() {
    const [xp, setXp] = useState(50);
    const [xpValue, setXpValue] = useState(300);

    useEffect(() => {
        setXpValue(600 * (xp/100))
    }, [xp]);

    function handlerRemoveXP() {
        if (xp === 0) {
            alert('Você não pode mais remover XPs');
        } else {
            setXp(xp - 10);
        }
    }

    function handlerAddXP() {
        if (xp === 100) {
            alert('Você não pode mais adicionar XPs');
        } else {
            setXp(xp + 10);
        }
    }

    return(
        <header className={styles.experienceBar}>
            <span><button className={styles.removeXP} onClick={handlerRemoveXP} > - </button> 0 xp</span>
            <div>
                <div style={{ width: `${xp}%` }} />

                <span className={styles.currentExperience} style={{ left: `${xp}%` }}>{xpValue} xp</span>
            </div>
            <span> 600 xp <button className={styles.addXP} onClick={handlerAddXP}> + </button></span>
        </header>
    );
}