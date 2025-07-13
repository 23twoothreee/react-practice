type ButtonProps = {
    label?: string;
    type?: 'button' | 'submit';
    color?: 'primary' | 'success' | 'danger' | 'secondary';
    className?: string
    onClick?: () => void;
    block?: boolean;
    icon?: string
};

function Button({
    label='',
    type = 'button',
    color = 'primary',
    onClick,
    block = false,
    className = '',
    icon = ''
}: ButtonProps) {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`btn btn-${color} ${block ? 'w-100' : ''} ${className}`}
        >
            {icon && <i className={`${icon} me-2`} />}
            {label}
        </button>
    );
}

export default Button;