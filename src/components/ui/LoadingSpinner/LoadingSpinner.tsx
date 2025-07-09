import { SpinnerWrapper, Spinner, LoadingMessage, Dots } from './LoadingSpinner.styled'

interface LoadingSpinnerProps {
    message?: string
}

export function LoadingSpinner({ message = '' }: LoadingSpinnerProps) {
    return (
        <SpinnerWrapper className='loading-spinner'>
            <Spinner />
            {message && (
                <LoadingMessage>
                    <span>{message}</span>
                    <Dots>....</Dots>
                </LoadingMessage>
            )}
        </SpinnerWrapper>
    )
}

