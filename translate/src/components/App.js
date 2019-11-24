import React, { useState } from 'react'
import UserCreate from './UserCreate'
import { LanguageProvider } from '../contexts/LanguageContext'

const App = (props) => {
  const [language, setLanguage] = useState('english')

  const onLanguageChange = (language) => {
    setLanguage(language)
  }

  return (
    <LanguageProvider value={language}>
      <div className="ui container">
        <div>
          Select a language:
          <i className="flag us" onClick={() => onLanguageChange('english')}/>
          <i className="flag nl" onClick={() => onLanguageChange('dutch')}/>
        </div>
        <UserCreate />
      </div>
    </LanguageProvider>
  )
}

export default App