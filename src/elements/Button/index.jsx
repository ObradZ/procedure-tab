const Button = ({ inverted, onClick, text, disabled = false }) => {
    return (
        <button
            type="button"
            onClick={onClick}
            className={`main-button ${inverted ? "inverted" : ""}`}
            disabled={disabled}
        >
            {text}
        </button>
    );
};

export default Button;
