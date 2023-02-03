import styles from './Introduction.module.css';

export const Introduction = ({ children }: { children: any }) => {

    return (
        <div className={styles.introduction}>
            {children}
        </div>
    )
}