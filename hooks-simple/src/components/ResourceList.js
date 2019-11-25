import React, { useEffect, useState } from 'react'
import axios from 'axios'

const ResourceList = (props) => {
  const { resource } = props
  const [resources, setResources] = useState([])

  useEffect(() => {
    (async (resource) => {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`)
      setResources(response.data)
    })(resource)
  }, [resource])

  return (
    <ul>
      {resources.map((record) => <li key={record.id}>{record.title}</li>)}
    </ul>
  )
}

export default ResourceList
