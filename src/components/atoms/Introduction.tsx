import styles from './Introduction.module.css';

export const Introduction = ({children}) => {

    return (
        <div className={styles.introduction}>
            {children}
        </div>
    )
}