import { useEffect, useState } from 'react'

export default () => {
  const [lat, setLat] = useState()
  const [errorMessage, setErrorMessage] = useState('')
  
  
  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      (position) => setLat(position.coords.latitude),
      (error) => setErrorMessage(error.message)
    )
  }, [])
  
  return [lat, errorMessage]
}
