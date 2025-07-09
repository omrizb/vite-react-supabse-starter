// LoadingSpinner.styled.ts
import styled, { keyframes } from 'styled-components'
import { colorUtilService } from '../../../utils/color.utils'

const baseColor = '#f03e3e' // red-8 from Open Props

const multiShadowSpin = keyframes`
  0%, 100% {
    box-shadow:
        0em -2.6em 0em 0em ${baseColor},
        1.8em -1.8em 0 0em ${colorUtilService.hexToRgba(baseColor, 0.2)},
        2.5em 0em 0 0em ${colorUtilService.hexToRgba(baseColor, 0.2)},
        1.75em 1.75em 0 0em ${colorUtilService.hexToRgba(baseColor, 0.2)},
        0em 2.5em 0 0em ${colorUtilService.hexToRgba(baseColor, 0.2)},
        -1.8em 1.8em 0 0em ${colorUtilService.hexToRgba(baseColor, 0.2)},
        -2.6em 0em 0 0em ${colorUtilService.hexToRgba(baseColor, 0.5)},
        -1.8em -1.8em 0 0em ${colorUtilService.hexToRgba(baseColor, 0.7)};
  }
  12.5% {
    box-shadow:
        0em -2.6em 0em 0em ${colorUtilService.hexToRgba(baseColor, 0.7)},
        1.8em -1.8em 0 0em ${baseColor},
        2.5em 0em 0 0em ${colorUtilService.hexToRgba(baseColor, 0.2)},
        1.75em 1.75em 0 0em ${colorUtilService.hexToRgba(baseColor, 0.2)},
        0em 2.5em 0 0em ${colorUtilService.hexToRgba(baseColor, 0.2)},
        -1.8em 1.8em 0 0em ${colorUtilService.hexToRgba(baseColor, 0.2)},
        -2.6em 0em 0 0em ${colorUtilService.hexToRgba(baseColor, 0.2)},
        -1.8em -1.8em 0 0em ${colorUtilService.hexToRgba(baseColor, 0.5)};
  }
  25% {
    box-shadow:
        0em -2.6em 0em 0em ${colorUtilService.hexToRgba(baseColor, 0.5)},
        1.8em -1.8em 0 0em ${colorUtilService.hexToRgba(baseColor, 0.7)},
        2.5em 0em 0 0em ${baseColor},
        1.75em 1.75em 0 0em ${colorUtilService.hexToRgba(baseColor, 0.2)},
        0em 2.5em 0 0em ${colorUtilService.hexToRgba(baseColor, 0.2)},
        -1.8em 1.8em 0 0em ${colorUtilService.hexToRgba(baseColor, 0.2)},
        -2.6em 0em 0 0em ${colorUtilService.hexToRgba(baseColor, 0.2)},
        -1.8em -1.8em 0 0em ${colorUtilService.hexToRgba(baseColor, 0.2)};
  }
  37.5% {
    box-shadow:
        0em -2.6em 0em 0em ${colorUtilService.hexToRgba(baseColor, 0.2)},
        1.8em -1.8em 0 0em ${colorUtilService.hexToRgba(baseColor, 0.5)},
        2.5em 0em 0 0em ${colorUtilService.hexToRgba(baseColor, 0.7)},
        1.75em 1.75em 0 0em ${baseColor},
        0em 2.5em 0 0em ${colorUtilService.hexToRgba(baseColor, 0.2)},
        -1.8em 1.8em 0 0em ${colorUtilService.hexToRgba(baseColor, 0.2)},
        -2.6em 0em 0 0em ${colorUtilService.hexToRgba(baseColor, 0.2)},
        -1.8em -1.8em 0 0em ${colorUtilService.hexToRgba(baseColor, 0.2)};
  }
  50% {
    box-shadow:
        0em -2.6em 0em 0em ${colorUtilService.hexToRgba(baseColor, 0.2)},
        1.8em -1.8em 0 0em ${colorUtilService.hexToRgba(baseColor, 0.2)},
        2.5em 0em 0 0em ${colorUtilService.hexToRgba(baseColor, 0.5)},
        1.75em 1.75em 0 0em ${colorUtilService.hexToRgba(baseColor, 0.7)},
        0em 2.5em 0 0em ${baseColor},
        -1.8em 1.8em 0 0em ${colorUtilService.hexToRgba(baseColor, 0.2)},
        -2.6em 0em 0 0em ${colorUtilService.hexToRgba(baseColor, 0.2)},
        -1.8em -1.8em 0 0em ${colorUtilService.hexToRgba(baseColor, 0.2)};
  }
  62.5% {
    box-shadow:
        0em -2.6em 0em 0em ${colorUtilService.hexToRgba(baseColor, 0.2)},
        1.8em -1.8em 0 0em ${colorUtilService.hexToRgba(baseColor, 0.2)},
        2.5em 0em 0 0em ${colorUtilService.hexToRgba(baseColor, 0.2)},
        1.75em 1.75em 0 0em ${colorUtilService.hexToRgba(baseColor, 0.5)},
        0em 2.5em 0 0em ${colorUtilService.hexToRgba(baseColor, 0.7)},
        -1.8em 1.8em 0 0em ${baseColor},
        -2.6em 0em 0 0em ${colorUtilService.hexToRgba(baseColor, 0.2)},
        -1.8em -1.8em 0 0em ${colorUtilService.hexToRgba(baseColor, 0.2)};
  }
  75% {
    box-shadow:
        0em -2.6em 0em 0em ${colorUtilService.hexToRgba(baseColor, 0.2)},
        1.8em -1.8em 0 0em ${colorUtilService.hexToRgba(baseColor, 0.2)},
        2.5em 0em 0 0em ${colorUtilService.hexToRgba(baseColor, 0.2)},
        1.75em 1.75em 0 0em ${colorUtilService.hexToRgba(baseColor, 0.2)},
        0em 2.5em 0 0em ${colorUtilService.hexToRgba(baseColor, 0.5)},
        -1.8em 1.8em 0 0em ${colorUtilService.hexToRgba(baseColor, 0.7)},
        -2.6em 0em 0 0em ${baseColor},
        -1.8em -1.8em 0 0em ${colorUtilService.hexToRgba(baseColor, 0.2)};
  }
  87.5% {
    box-shadow:
        0em -2.6em 0em 0em ${colorUtilService.hexToRgba(baseColor, 0.2)},
        1.8em -1.8em 0 0em ${colorUtilService.hexToRgba(baseColor, 0.2)},
        2.5em 0em 0 0em ${colorUtilService.hexToRgba(baseColor, 0.2)},
        1.75em 1.75em 0 0em ${colorUtilService.hexToRgba(baseColor, 0.2)},
        0em 2.5em 0 0em ${colorUtilService.hexToRgba(baseColor, 0.2)},
        -1.8em 1.8em 0 0em ${colorUtilService.hexToRgba(baseColor, 0.5)},
        -2.6em 0em 0 0em ${colorUtilService.hexToRgba(baseColor, 0.7)},
        -1.8em -1.8em 0 0em ${baseColor};
  }
`

const typing = keyframes`
    from {
        clip-path: inset(0 100% 0 0);
    }
    to {
        clip-path: inset(0 0% 0 0);
    }
`

export const SpinnerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: var(--size-3);
    width: 100%;
`

export const Spinner = styled.div`
    position: relative;
    width: 1.2em;
    height: 1.2em;
    margin-top: var(--size-10);
    border-radius: 50%;
    font-size: 10px;
    text-indent: -9999em;
    animation: ${multiShadowSpin} 1.1s infinite ease;
    transform: translateZ(0);
`

export const LoadingMessage = styled.div`
    margin-top: var(--size-6);
    color: var(--gray-6);
    font-size: var(--font-size-1);
    white-space: nowrap;
    overflow: hidden;
    display: inline-block;
`

export const Dots = styled.span`
    clip-path: inset(0 100% 0 0);
    animation: ${typing} 1s steps(4) forwards infinite;
`
