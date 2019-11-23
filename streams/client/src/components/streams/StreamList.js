import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';
import { Stream } from 'stream';

const StreamList = (props) => {
  const { fetchStreams, streams, currentUserId } = props

  const renderAdmin = (stream) => {
    if (stream.userId === currentUserId) {
      return (
        <div className="right floated content">
          <button className="ui button primary">
            Edit
          </button>
          <button className="ui button negative">
            Delete
          </button>
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
            {stream.title}
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
    </>
  )
}

const mapStateToProps = (state) => {
  const { auth, streams } = state

  return {
    streams: Object.values(streams),
    currentUserId: auth.userId
  }
}
export default connect(mapStateToProps, { fetchStreams })(StreamList)
