import React, { useContext } from 'react'
import AnimatedCursor from "react-animated-cursor"
import { ThemeContext } from '../App'

export const AnimCursor = () => {
  const theme = useContext(ThemeContext)[0];
  return (
    <div className="App">
    <AnimatedCursor
      innerSize={10}
      outerSize={8}
      color= {theme=="dark"?'255,255,255':"0,0,0"}
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={5}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'button',
        '.link',
      ]}
    />
    </div>
  )
}
