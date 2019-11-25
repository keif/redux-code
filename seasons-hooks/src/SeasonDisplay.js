import './SeasonDisplay.css'
import React from 'react'

const configSeason = {
  summer: {
    iconName: `sun`,
    text: `let's hit the beach`
  },
  winter: {
    iconName: `snowflake`,
    text: `brr, it's chilly`
  }
}

const getSeason = (lat, month) => {
  const isNorthernHemisphere = lat > 0
  if (month > 2 && month < 9) {
    return isNorthernHemisphere ? 'summer' : 'winter'
  } else {
    return isNorthernHemisphere ? 'winter' : 'summer'
  }
}

const SeasonDisplay = (props) => {
  console.log('SeasonDisplay', props)
  const { lat } = props
  const season = getSeason(lat, new Date().getMonth())
  const { iconName, text } = configSeason[season]

  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive icon ${iconName}`} />
      <h1>{text}</h1>
      <i className={`icon-right massive icon ${iconName}`} />
    </div>
  )
}

export default SeasonDisplay