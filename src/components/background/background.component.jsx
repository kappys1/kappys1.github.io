import React, { useEffect, useRef, useState } from 'react'
import BIRDS from 'vanta/dist/vanta.birds.min'
import { Background } from './background.style'

export const BackgroundComponent = ({ children }) => {
  const myRef = useRef(null)
  const [vantaEffect, setVantaEffect] = useState(0)

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(BIRDS({
        el: myRef.current,
        backgroundColor: '#fff',
        backgroundAlpha: 0.00,
        quantity: 4.00,
        birdSize: 1.50,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])
  console.log('background')
  return (
    <Background ref={myRef}>
      {children}
    </Background>
  )
}
