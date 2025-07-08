interface ErrorMessageProps {
    title: string
    message: string
}

export function ErrorMessage({ title, message }: ErrorMessageProps) {
    return (
        <div className="error-message">
            <h2 className="error-title">{title}</h2>
            <p className="error-text">{message}</p>
        </div>
    )
}