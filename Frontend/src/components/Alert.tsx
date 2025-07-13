type AlertProps = {
    label: string;
    color?: 'primary' | 'success' | 'danger' | 'secondary';
    dismissable?: boolean
    onClose: () => void
}

function Alert({
    label = '',
    color = 'primary',
    dismissable = false,
    onClose,
}: AlertProps) {
    return (
        <div 
            className={`alert alert-${color} alert-dismissible fade show`}
            role="alert"
        >
            {label}
            {dismissable && (
                <button 
                    type="button" 
                    className="btn-close" 
                    data-bs-dismiss="alert" 
                    aria-label="Close"
                    onClick={onClose}
                />
            )}
        </div>
    )
};

export default Alert;