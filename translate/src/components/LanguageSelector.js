import React, { useContext } from 'react'
import LanguageContext from '../contexts/LanguageContext';

const LanguageSelector = (props) => {
  const { onLanguageChange } = useContext(LanguageContext)

  return (
    <>
        Select a language:
        <i className="flag us" onClick={() => onLanguageChange('english')}/>
        <i className="flag nl" onClick={() => onLanguageChange('dutch')}/>
    </>
  )
}

export default LanguageSelector