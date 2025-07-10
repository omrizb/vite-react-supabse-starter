import {
    ErrorPage,
    ErrorContainer,
    ErrorIcon,
    ErrorCode,
    ErrorTitle,
    ErrorMessage,
    ErrorActions,
    Button,
} from './Error.styled'

interface Props {
    title?: string
    message?: string
    code?: number
}

export function Error({
    title = 'Something went wrong',
    message = 'An unexpected error occurred',
    code = 500,
}: Props = {}) {
    return (
        <ErrorPage>
            <ErrorContainer>
                <ErrorIcon>
                    <ErrorCode>{code}</ErrorCode>
                </ErrorIcon>

                <ErrorTitle>{title}</ErrorTitle>
                <ErrorMessage>{message}</ErrorMessage>

                <ErrorActions>
                    <Button $variant="primary" onClick={() => window.history.back()}>
                        Go Back
                    </Button>
                    <Button $variant="secondary" onClick={() => (window.location.href = '/')}>
                        Go Home
                    </Button>
                </ErrorActions>
            </ErrorContainer>
        </ErrorPage>
    )
}
