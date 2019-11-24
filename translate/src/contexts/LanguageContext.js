import React, { createContext } from 'react'

const LanguageContext = createContext('english')

export const LanguageProvider = LanguageContext.Provider
export const LanguageConsumer = LanguageContext.Consumer
export default LanguageContext
