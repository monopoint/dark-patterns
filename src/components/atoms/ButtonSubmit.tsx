import styles from './ButtonSubmit.module.css';

export const ButtonSubmit = ({ value, onClick, disabled = false, variant = "default" }: { value: string, onClick: () => void, disabled?: boolean, variant?: string }) => {

    return (
        <button 
            onClick={() => onClick()} 
            className={[styles.buttonsubmit, styles['buttonsubmit--' + variant]].join(' ')}
            tabIndex={-1}
            disabled={disabled}
        >        
            {value}
        </button>
    )
}