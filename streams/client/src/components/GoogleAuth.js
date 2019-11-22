import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import { signIn, signOut } from '../actions'

const GoogleAuth = (props) => {
  const { isSignedIn, signIn, signOut } = props
  const [auth, setAuth] = useState()

  const onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      signIn(window.gapi.auth2.getAuthInstance().currentUser.get().getId())
    } else {
      signOut()
    }
  }

  const onSignInClick = () => {
    auth.signIn()
  }

  const onSignOutClick = () => {
    auth.signOut()
  }

  const renderAuthButton = () => {
    if (isSignedIn === null) {
      return null
    } else if (isSignedIn) {
      return (
        <button
          className="ui red google button"
          onClick={onSignOutClick}>
          <i className="google icon" />
          Sign Out
        </button>
      )
    } else {
      return (
        <button
          className="ui red google button"
          onClick={onSignInClick}>
          <i className="google icon" />
          Sign In with Google
        </button>
      )
    }
  }

  useEffect(() => {
    const params = {
      clientId: process.env.CLIENT_ID,
      scope: 'email'
    }

    window.gapi.load('client:auth2', () => {
      window.gapi.auth2.init(params)
        .then((response) => {
          setAuth(window.gapi.auth2.getAuthInstance())
          onAuthChange(window.gapi.auth2.getAuthInstance().isSignedIn.get())
          window.gapi.auth2.getAuthInstance().isSignedIn.listen(onAuthChange)
        })
    })
  }, [])

  return (
    <div>{renderAuthButton()}</div>
  )
}

const mapStateToProps = (state) => {
  const { isSignedIn } = state.auth

  return { isSignedIn }
}

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth)