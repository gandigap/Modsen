import React from 'react'
import { useFormik } from 'formik'
import {
  toastService,
  ToastsContainer,
} from '../../library'

import TextInputs from './TextInputs'
import ColorInputs from './ColorInputs'
import ColorCheckBox from './ColorCheckBox'

import {
  StyledButtonSubmit,
  StyledColorSettingContainer,
  StyledForm,
  StyledFormTitle,
} from './style'
import Selects from './Selects'
import RadioContainer from './RadioContainer'
import InputNumber from './InputNumber'

const ToastForm = () => {
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      title: 'Title',
      content: 'Content',
      size: 'small',
      position: 'top_left',
      type: 'info',
      color: '',
      bgcolor: '',
      delay: '3000',
      animation: 'horizontal',
      checkbox: false,
    },
    onSubmit: (values) => {},
  })

  const someClick = () => {
    const args = {
      title: formik.values.title,
      content: formik.values.content,
      size: formik.values.size,
      animationType: formik.values.animation,
      toastType: formik.values.type,
      color: formik.values.checkbox
        ? ''
        : formik.values.color,
      bgcolor: formik.values.checkbox
        ? ''
        : formik.values.bgcolor,
    }
    toastService.addToast(args, +formik.values.delay)
  }

  return (
    <StyledForm onSubmit={formik.handleSubmit}>
      <ToastsContainer position={formik.values.position} />
      <StyledFormTitle>Toast config form</StyledFormTitle>
      <TextInputs
        handleChange={formik.handleChange}
        values={[
          formik.values.title,
          formik.values.content,
        ]}
      />
      <Selects
        handleChange={formik.handleChange}
        values={[
          formik.values.size,
          formik.values.animation,
          formik.values.position,
        ]}
      />
      <StyledColorSettingContainer>
        <ColorCheckBox
          values={formik.values.checkbox}
          handleChange={formik.handleChange}
        />
        {formik.values.checkbox ? null : (
          <ColorInputs
            handleChange={formik.handleChange}
            values={[
              formik.values.color,
              formik.values.bgcolor,
            ]}
          />
        )}
      </StyledColorSettingContainer>

      <RadioContainer
        handleChange={
          formik.getFieldProps(formik.values.type).onChange
        }
      />
      <InputNumber
        value={formik.values.delay}
        handleChange={formik.handleChange}
      />

      <StyledButtonSubmit type="submit" onClick={someClick}>
        Submit
      </StyledButtonSubmit>
    </StyledForm>
  )
}

export default ToastForm
