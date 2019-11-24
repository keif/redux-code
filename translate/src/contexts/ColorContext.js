import { createContext } from 'react'

const ColorContext = createContext('')

export const ColorProvider = ColorContext.Provider
export const ColorConsumer = ColorContext.Consumer
export default ColorContext
