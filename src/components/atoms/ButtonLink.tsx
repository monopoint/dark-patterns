import styles from './ButtonLink.module.css';

export const ButtonLink = ({ value, onClick }: { value: string, onClick: () => void }) => {

    return (
        <button onClick={() => onClick()} className={styles.buttonlink} tabIndex={-1}>{value}</button>
    )
}