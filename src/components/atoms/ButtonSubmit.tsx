import styles from './ButtonSubmit.module.css';

export const ButtonSubmit = ({value, onClick, disabled, variant="default"}) => {

    return (
        <button 
            onClick={() => onClick()} 
            className={styles.buttonsubmit} 
            className={[styles.buttonsubmit, styles['buttonsubmit--' + variant]].join(' ')}
            tabIndex="-1"
            disabled={disabled ? "disabled" : ""}
        >        
            {value}
        </button>
    )
}