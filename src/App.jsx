import React, { Suspense } from 'react'
import ReactGA from 'react-ga'
import { AppContainer, ContainerSeeMe, Description, Link, Title } from './App.style'
import { ImGithub, ImLinkedin, ImNpm, ImFilePdf } from 'react-icons/im'
import pdf from './assets/resume.pdf'
const TRACKING_ID = 'UA-110018938-5'
const BackgroundComponent = React.lazy(() => import('./components/background'))

function App () {
  ReactGA.initialize(TRACKING_ID)
  ReactGA.pageview(window.location.pathname + window.location.search)
  const handlerClick = (link) => {
    ReactGA.event({
      category: 'User',
      action: `Click ${link}`
    })
  }
  return (
    <>
      <Suspense fallback={<div />}>
        <BackgroundComponent />
      </Suspense>
      <AppContainer>
        <Title>Alex <span>Marcos</span></Title>
        <ContainerSeeMe>
          <Link aria-label='github' onClick={() => handlerClick('github')} href='https://github.com/kappys1'><ImGithub /></Link>
          <Link aria-label='linkedin' onClick={() => handlerClick('Linkedin')} href='https://www.linkedin.com/in/alexmarcosgutierrez/'> <ImLinkedin className='linkedin' /></Link>
          <Link aria-label='npm' onClick={() => handlerClick('NPM')} href='https://www.npmjs.com/~alex-tmt'><ImNpm className='npm' /></Link>
          <Link aria-label='pdf' onClick={() => handlerClick('pdf')} href={pdf}><ImFilePdf className='pdf' /></Link>
        </ContainerSeeMe>
        <Description>I'm working to show you my best</Description>
      </AppContainer>
    </>
  )
}

export default App
