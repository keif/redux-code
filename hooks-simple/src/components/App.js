import React, { useState } from 'react'

const App = (props) => {
  const [resource, setResource] = useState('posts')

  return (
    <div className="ui container">
      <div>
        <button onClick={() => setResource('posts')}>Posts</button>
        <button onClick={() => setResource('todos')}>Todos</button>
      </div>
    </div>
  )
}

export default App
