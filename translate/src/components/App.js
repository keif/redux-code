import React, { useState } from 'react'
import UserCreate from './UserCreate'
import { LanguageProvider } from '../contexts/LanguageContext'
import { ColorProvider } from '../contexts/ColorContext';
import LanguageSelector from './LanguageSelector';

const App = (props) => {
  const [language, setLanguage] = useState('english')

  const onLanguageChange = (language) => {
    setLanguage(language)
  }

  return (
    <div className="ui container">
      <LanguageSelector onLanguageChange={onLanguageChange} />
      <LanguageProvider value={language}>
        <ColorProvider value="red">
          <UserCreate />
        </ColorProvider>
      </LanguageProvider>
    </div>
  )
}

export default App