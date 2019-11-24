import React, { createContext, useState } from 'react'

const LanguageContext = createContext('english')

export const LanguageProvider = LanguageContext.Provider
export const LanguageConsumer = LanguageContext.Consumer
export default LanguageContext

export const LanguageStore = (props) => {
  const { children } = props
  const [language, setLanguage] = useState('english')

  const onLanguageChange = (language) => setLanguage(language)

  return (
    <LanguageProvider value={{ language, onLanguageChange: onLanguageChange }}>
      {children}
    </LanguageProvider>
  )
}

