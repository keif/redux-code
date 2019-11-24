import React from 'react'
import { LanguageConsumer } from '../contexts/LanguageContext'
import { ColorConsumer } from '../contexts/ColorContext'

const Button = (props) => {
  const renderButton = (color) => {
    const buttonColor = color === 'red' ? 'negative' : 'primary'

    return (
      <button className={`ui button ${buttonColor}`}>
        <LanguageConsumer>
          {renderSubmit}
        </LanguageConsumer>
      </button>
    )
  }

  const renderSubmit = ({ language }) => language === 'english' ? 'Submit' : 'Voorleggen'
  return (
    <ColorConsumer>
      {renderButton}
    </ColorConsumer>
  )
}

export default Button
