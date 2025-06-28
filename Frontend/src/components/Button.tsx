type ButtonProps = {
    /** Label placeholder for the button */
    label: string;
    /** Button type, either its a generic button or for forms submit */
    type?: 'button' | 'submit';
    /** Button color */
    variant?: 'primary' | 'success' | 'danger' | 'secondary';
    /** On click function of the button */
    onClick?: () => void;
    /** Boolean value determining if the button width extends to max width */
    block?: boolean;
};

function Button({
    label,
    type = 'submit',
    variant = 'primary',
    onClick,
    block = true
}: ButtonProps) {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`btn btn-${variant} ${block ? 'w-100' : ''}`}
        >
            {label}
        </button>
    );
}

export default Button;