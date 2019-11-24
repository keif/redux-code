import React from 'react'
import UserCreate from './UserCreate'
import { LanguageStore } from '../contexts/LanguageContext'
import { ColorProvider } from '../contexts/ColorContext';
import LanguageSelector from './LanguageSelector';

const App = (props) => {
  return (
    <div className="ui container">
      <LanguageStore>
        <LanguageSelector />
        <ColorProvider value="red">
          <UserCreate />
        </ColorProvider>
      </LanguageStore>
    </div>
  )
}

export default App