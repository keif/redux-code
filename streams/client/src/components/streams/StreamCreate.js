import React, { useState } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { createStream } from '../../actions'

const StreamCreate = (props) => {
  const { handleSubmit, createStream } = props
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')


  const onSubmit = (formValues) => {
    createStream(formValues)
  }

  const renderError = ({error, touched}) => {
    if (error && touched) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      )
    }
  }

  const renderInput = ({ input, label, meta, onChange, value }) => {
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`

    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete='off' onChange={onChange} value={value}/>
        {renderError(meta)}
      </div>
    )
  }

  return (
    <form className="ui form error" onSubmit={handleSubmit(onSubmit)}>
      <Field
        component={renderInput}
        label="Enter Title"
        name="title"
        onChange={(event) => setTitle(event.target.value)}
        value={title}
      />
      <Field
        component={renderInput}
        label="Enter Description"
        name="description"
        onChange={(event) => setDescription(event.target.value)}
        value={description}
      />
      <button className="ui button primary">Submit</button>
    </form>
  )
}

const validate = (formValues) => {
  const errors = {}

  if (!formValues.title) {
    errors.title = 'You must enter a title'
  }

  if (!formValues.description) {
    errors.description = 'You must enter a description'
  }

  return errors
}

const formWrapped = reduxForm({
  form: 'streamCreate',
  validate
})(StreamCreate)

export default connect(null, { createStream })(formWrapped)
