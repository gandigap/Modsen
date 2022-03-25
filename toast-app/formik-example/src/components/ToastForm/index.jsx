import React from 'react'
import { useFormik } from 'formik'
import { toastService, ToastsContainer } from './dist'

import TextInputs from './TextInputs'
import ColorInputs from './ColorInputs'
import ColorCheckBox from './ColorCheckBox'

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
      content: '',
      size: '',
      position: '',
      type: '',
      color: '',
      bgcolor: '',
      timeDelay: '',
      animation: '',
      checkbox: true,
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
      <TextInputs
        handleChange={formik.handleChange}
        values={
          (formik.values.title, formik.values.content)
        }
      />
      <Selects
        handleChange={formik.handleChange}
        values={[
          formik.values.size,
          formik.values.animation,
          formik.values.position,
        ]}
      />
      <ColorCheckBox
        value={formik.values.checkbox}
        handleChange={formik.handleChange}
      />
      {formik.values.checkbox ? null : (
        <ColorInputs
          handleChange={formik.handleChange}
          values={
            (formik.values.color, formik.values.bgcolor)
          }
        />
      )}

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
