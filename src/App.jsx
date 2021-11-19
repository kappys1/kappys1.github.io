import { useState } from 'react'
import { AppContainer, ContainerSeeMe, Description, Link, Title } from './App.style'
import { BackgroundComponent } from './components/background'
import { ImGithub, ImLinkedin, ImNpm, ImFilePdf } from 'react-icons/im'
import pdf from './assets/resume.pdf'

function App () {
  return (
    <>
      <BackgroundComponent />
      <AppContainer>
        <Title>Alex <span>Marcos</span></Title>
        <ContainerSeeMe>
          <Link href='https://github.com/kappys1'><ImGithub /></Link>
          <Link href='https://www.linkedin.com/in/alexmarcosgutierrez/'> <ImLinkedin className='linkedin' /></Link>
          <Link href='https://www.npmjs.com/~alex-tmt'><ImNpm className='npm' /></Link>
          <Link href={pdf}><ImFilePdf className='pdf' /></Link>
        </ContainerSeeMe>
        <Description>I'm working to show you my best</Description>
      </AppContainer>

    </>
  )
}

export default App
