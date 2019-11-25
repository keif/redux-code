import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

const App = () => {
  const [latitude, setLatitude] = useState()
  const [errorMessage, setErrorMessage] = useState('')

  const errorCallback = (error) => {
    console.error(error)
    setErrorMessage(error.message)
  }

  const renderContent = () => {
    if (latitude) {
      return  <SeasonDisplay lat={latitude} />
    }

    if (errorMessage) {
      return <div>Error Message: ${errorMessage}</div>
    }

    return <Spinner message={`Please accept location request`} />
  }

  const successCallback = (position) => {
    console.log(position.coords)
    setLatitude(position.coords.latitude)
  }

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(successCallback, errorCallback)
  }, [])

  return (
    <>
    {renderContent()}
    </>
  )
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)