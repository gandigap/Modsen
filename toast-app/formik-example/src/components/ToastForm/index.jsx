import React from 'react'
import { useFormik } from 'formik'

import {
  TOAST_TYPES,
  TOAST_POSITIONS,
  TOAST_SIZES,
} from '../../constants'

import InputTitle from './InputTitle'

import {
  StyledButtonSubmit,
  StyledForm,
  StyledFormTitle,
} from './style'
import Selects from './Selects'
import RadioContainer from './RadioContainer'

const ToastForm = () => {
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      title: '',
      size: '',
      position: '',
      type: '',
      color: '',
      timeDelay: '',
    },
    onSubmit: (values) => {
      handleClick()
      console.log(JSON.stringify(values, null, 2))
    },
  })

  const handleClick = () => {
    console.log('click')
  }
  return (
    <StyledForm onSubmit={formik.handleSubmit}>
      <StyledFormTitle>Toast config form</StyledFormTitle>
      <InputTitle
        handleChange={formik.handleChange}
        value={formik.values.title}
      />
      <Selects
        handleChange={formik.handleChange}
        valueSize={formik.values.size}
        valuePosition={formik.values.position}
      />
      <RadioContainer
        handleChange={
          formik.getFieldProps(formik.values.type).onChange
        }
      />

      <StyledButtonSubmit type="submit">
        Submit
      </StyledButtonSubmit>
    </StyledForm>
  )
}

export default ToastForm
