import styled from 'styled-components'
import { breakpoints } from './styles/breakpoints'

export const AppContainer = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    padding: 1rem;
    @media (min-width: ${breakpoints.mobile}) {
         align-items: flex-start;
         padding: 3rem;
    }
`

export const Title = styled.h1`
    font-size: 3rem;
    span {
        font-weight: 200;
    }
    @media (min-width: ${breakpoints.mobile}) {
        font-size: 5rem;
    }
    @media (min-width: ${breakpoints.small}) {
        font-size: 6.5rem;
    }
`

export const Description = styled.p`
    font-size: 1.3rem;
    font-weight: 200;
    @media (min-width: ${breakpoints.small}) {
        font-size: 1.5rem;
    }
`

export const Link = styled.a`
    text-decoration: none;
    color: inherit;
`
export const ContainerSeeMe = styled.section`
    display: flex;
    justify-content: space-around;
    width: 80%;
    height: 15%;
    border-radius: 10px;
    padding: 1rem;
 
    svg {
        font-size: 1.5em;
        cursor: pointer;
    }

    .linkedin {
        color: #0e76a8;
    }
    .pdf,
    .npm {
        color: #CC3534;
    }

    @media (min-width: ${breakpoints.mobile}) {
        width: 40%;
        max-width: 300px;
        justify-content: space-between;
    }
    @media (min-width: ${breakpoints.small}) {
        width: 50%;
        max-width: 400px;
        svg {
            font-size: 2em;
            cursor: pointer;
        }
    }
`
