import './Error.scss'

interface ErrorProps {
    title?: string
    message?: string
    code?: number
}

export function Error({ title = 'Something went wrong', message = 'An unexpected error occurred', code = 500 }: ErrorProps = {}) {

    return (
        <div className="error-page">
            <div className="error-container">
                <div className="error-icon">
                    <span className="error-code">{code}</span>
                </div>

                <h1 className="error-title">{title}</h1>
                <p className="error-message">{message}</p>

                <div className="error-actions">
                    <button
                        className="btn btn-primary"
                        onClick={() => window.history.back()}
                    >
                        Go Back
                    </button>
                    <button
                        className="btn btn-secondary"
                        onClick={() => window.location.href = '/'}
                    >
                        Go Home
                    </button>
                </div>
            </div>
        </div>
    )
} 