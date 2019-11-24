import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';
import { Link } from 'react-router-dom'

const StreamList = (props) => {
  const { fetchStreams, isSignedIn, streams, currentUserId } = props

  const renderAdmin = (stream) => {
    if (stream.userId === currentUserId) {
      return (
        <div className="right floated content">
          <Link className="ui button primary" to={`/streams/edit/${stream.id}`}>
            Edit
          </Link>
          <Link className="ui button negative" to={`/streams/delete/${stream.id}`}>
            Delete
          </Link>
        </div>
      )
    }
  }

  const renderCreate = () => {
    if (isSignedIn) {
      return (
        <div style={{textAlign: 'right'}}>
          <Link to="/streams/new" className="ui button primary">Create Stream</Link>
        </div>
      )
    }
  }

  const renderList = () => {
    return streams.map(stream => {
      return (
        <div className="item" key={stream.id}>
          {renderAdmin(stream)}
          <i className="large middle aligned icon camera" />
          <div className="content">
            <Link to={`/streams/${stream.id}`}>{stream.title}</Link>
            <div className="description">
              {stream.description}
            </div>
          </div>
        </div>
      )
    })
  }

  useEffect(() => {
    fetchStreams()
  }, [])

  return (
    <>
      <h2>Streams</h2>
      <div className="ui celled list">
        {renderList()}
      </div>
      {renderCreate()}
    </>
  )
}

const mapStateToProps = (state) => {
  const { auth, streams } = state

  return {
    currentUserId: auth.userId,
    isSignedIn: auth.isSignedIn,
    streams: Object.values(streams)
  }
}
export default connect(mapStateToProps, { fetchStreams })(StreamList)
