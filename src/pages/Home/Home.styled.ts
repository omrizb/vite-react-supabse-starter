import styled from 'styled-components'

export const HomeWrapper = styled.div`
    max-width: var(--content-break-normal);
    margin: 0 auto;
    padding: var(--size-8);
`

export const Hero = styled.section`
    text-align: center;
    margin-bottom: var(--size-6);
    padding: var(--size-6) 0;
`

export const HeroTitle = styled.h1`
    font-size: var(--font-size-8);
    font-weight: var(--font-weight-6);
    color: var(--blue-9);
    margin-bottom: var(--size-4);
`

export const HeroSubtitle = styled.p`
    font-size: var(--font-size-4);
    color: var(--gray-6);
    max-width: 800px;
    margin: 0 auto;
`

export const Showcase = styled.section`
    margin-bottom: var(--size-8);
`

export const ShowcaseHeading = styled.h2`
    font-size: var(--font-size-6);
    font-weight: var(--font-weight-6);
    color: var(--gray-9);
    margin-bottom: var(--size-4);
    text-align: center;
`

export const ComponentsGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--size-8);

    @media (min-width: 800px) {
        grid-template-columns: 1fr 1fr;
    }
`

export const ComponentDemo = styled.div`
    background: white;
    border-radius: var(--radius-3);
    padding: var(--size-6);
    box-shadow: var(--shadow-5);

    h3 {
        font-size: var(--font-size-4);
        font-weight: var(--font-weight-5);
        color: var(--gray-8);
        margin-bottom: var(--size-4);
    }
`

export const Features = styled.section`
    margin-bottom: var(--size-8);
`

export const FeaturesHeading = styled.h2`
    font-size: var(--font-size-6);
    font-weight: var(--font-weight-6);
    color: var(--gray-9);
    margin-bottom: var(--size-4);
    text-align: center;
`

export const FeaturesGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--size-8);

    @media (min-width: 800px) {
        grid-template-columns: repeat(3, 1fr);
    }
`

export const FeatureCard = styled.div`
    background: white;
    border-radius: var(--radius-3);
    padding: var(--size-6);
    box-shadow: var(--shadow-5);
    text-align: center;

    h3 {
        font-size: var(--font-size-4);
        font-weight: var(--font-weight-5);
        color: var(--gray-8);
        margin-bottom: var(--size-4);
    }

    p {
        color: var(--gray-6);
        line-height: var(--line-height-relaxed);
    }
`
