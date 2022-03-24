import React from 'react'
import { useFormik } from 'formik'
import { toastService, ToastsContainer } from 'dist'

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
      animation: '',
    },
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2))
    },
  })

  const handleClick = (e) => {
    const args = {
      label: formik.values.title,
      toastType: formik.values.type,
      size: formik.values.size,
    }
    toastService.addToast(args)
  }

  return (
    <StyledForm onSubmit={formik.handleSubmit}>
      <ToastsContainer
        position="top_left"
        toastList={toastService.toastList}
        handleRemoveToast={() => console.log('ex')}
      />
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

      <StyledButtonSubmit
        type="submit"
        onClick={handleClick}>
        Submit
      </StyledButtonSubmit>
    </StyledForm>
  )
}

export default ToastForm
