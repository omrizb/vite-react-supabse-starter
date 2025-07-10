import styled from 'styled-components'

export const ErrorPage = styled.div`
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;

    @media (max-width: 768px) {
        padding: 1rem;
    }
`

export const ErrorContainer = styled.div`
    background: white;
    border-radius: 12px;
    padding: 3rem;
    text-align: center;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    max-width: 500px;
    width: 100%;

    @media (max-width: 768px) {
        padding: 2rem;
    }
`

export const ErrorIcon = styled.div`
    margin-bottom: 2rem;
`

export const ErrorCode = styled.span`
    display: inline-block;
    font-size: 2.5rem;
    font-weight: bold;
    color: #e74c3c;
    background: #fdf2f2;
    border-radius: 50%;
    width: 120px;
    height: 120px;
    line-height: 120px;
    text-align: center;
    border: 4px solid #e74c3c;

    @media (max-width: 768px) {
        font-size: 3rem;
        width: 100px;
        height: 100px;
        line-height: 100px;
    }
`

export const ErrorTitle = styled.h1`
    font-size: 2rem;
    font-weight: 600;
    color: #2c3e50;
    margin-bottom: 1rem;

    @media (max-width: 768px) {
        font-size: 1.5rem;
    }
`

export const ErrorMessage = styled.p`
    font-size: 1.1rem;
    color: #7f8c8d;
    margin-bottom: 2rem;
    line-height: 1.6;
`

export const ErrorActions = styled.div`
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`

interface ButtonProps {
    $variant: 'primary' | 'secondary'
}

export const Button = styled.button<ButtonProps>`
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 6px;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
    text-decoration: none;
    display: inline-block;
  
    background: ${({ $variant }) => ($variant === 'primary' ? '#3498db' : '#ecf0f1')};
    color: ${({ $variant }) => ($variant === 'primary' ? '#ffffff' : '#2c3e50')};
  
    &:hover {
      background: ${({ $variant }) => ($variant === 'primary' ? '#2980b9' : '#bdc3c7')};
      transform: translateY(-2px);
    }
  
    width: fit-content;
`
