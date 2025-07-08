import './LoadingSpinner.scss'

interface LoadingSpinnerProps {
    message?: string
}

export function LoadingSpinner({ message = '' }: LoadingSpinnerProps) {
    return (
        <div className="loading-spinner">
            <div className="spinner"></div>
            <div className="loading-message">
                {message && (
                    <>
                        <span>{message}</span>
                        <span className='loading-message-dots'>....</span>
                    </>
                )}
            </div>
        </div>
    )
}
