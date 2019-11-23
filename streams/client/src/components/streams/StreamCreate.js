import React, { useState } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { createStream } from '../../actions'

const renderError = ({error, touched}) => {
  if (error && touched) {
    return (
      <div className="ui error message">
        <div className="header">{error}</div>
      </div>
    )
  }
}

const renderInput = (props) => {
  const { input, label, meta } = props
  const className = `field ${meta.error && meta.touched ? 'error' : ''}`

  return (
    <div className={className}>
      <label>{label}</label>
      <input {...input} autoComplete='off' type="text" />
      {renderError(meta)}
    </div>
  )
}

const StreamCreate = (props) => {
  const { handleSubmit, createStream } = props

  const onSubmit = (formValues) => {
    createStream(formValues)
  }

  return (
    <form className="ui form error" onSubmit={handleSubmit(onSubmit)}>
      <Field
        component={renderInput}
        label="Enter Title"
        name="title"
      />
      <Field
        component={renderInput}
        label="Enter Description"
        name="description"
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
