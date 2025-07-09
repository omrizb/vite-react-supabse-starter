import styled from 'styled-components'

const headerHeight = '64px'
const transitionDuration = 'var(--transition-slower)'

export const HeaderFixerContainer = styled.div`
    position: relative;
`

export const HeaderBackground = styled.div`
    position: fixed;
    width: 100%;
    height: ${headerHeight};
    transition: opacity ${transitionDuration};
`

export const HeaderElement = styled.header`
    position: fixed;
    width: 100%;
    height: ${headerHeight};
    transition: opacity ${transitionDuration};
`
