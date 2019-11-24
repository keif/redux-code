import React from 'react'

const LanguageSelector = (props) => {
  const { onLanguageChange } = props

  return (
    <>
        Select a language:
        <i className="flag us" onClick={() => onLanguageChange('english')}/>
        <i className="flag nl" onClick={() => onLanguageChange('dutch')}/>
    </>
  )
}

export default LanguageSelector