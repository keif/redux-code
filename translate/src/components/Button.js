import React, { useContext } from 'react'
import { LanguageConsumer } from '../contexts/LanguageContext'

const Button = (props) => {
  return (
    <button className="ui button primary">
      <LanguageConsumer>
        {(value) => value === 'english' ? 'Submit' : 'Voorleggen'}
      </LanguageConsumer>
    </button>
  )
}

export default Button
