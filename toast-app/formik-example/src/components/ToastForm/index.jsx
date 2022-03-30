import React from 'react'
import { useFormik } from 'formik'
import {
  toastService,
  ToastsContainer,
} from '../../library'

import TextInputs from './TextInputs'
import ColorInputs from './ColorInputs'
import ColorCheckBox from './ColorCheckBox'
import Selects from './Selects'
import RadioContainer from './RadioContainer'
import InputNumber from './InputNumber'

import {
  TOAST_SIZES,
  TOAST_POSITIONS,
  TOAST_ANIMATIONS,
  TOAST_TYPES,
} from 'constants'

import {
  StyledButtonSubmit,
  StyledColorSettingContainer,
  StyledForm,
  StyledFormTitle,
} from './style'

const ToastForm = () => {
  const {
    values,
    handleChange,
    handleSubmit,
    getFieldProps,
  } = useFormik({
    enableReinitialize: true,
    initialValues: {
      title: 'Title',
      content: 'Content',
      size: TOAST_SIZES.small,
      position: TOAST_POSITIONS.top_left,
      type: TOAST_TYPES.info,
      color: '',
      bgcolor: '',
      delay: '3000',
      animation: TOAST_ANIMATIONS.horizontal,
      checkbox: false,
    },
  })

  const someClick = () => {
    const args = {
      title: values.title,
      content: values.content,
      size: values.size,
      animationType: values.animation,
      toastType: values.type,
      color: values.checkbox ? '' : values.color,
      bgcolor: values.checkbox ? '' : values.bgcolor,
    }
    toastService.addToast(args, +values.delay)
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <ToastsContainer position={values.position} />
      <StyledFormTitle>Toast config form</StyledFormTitle>
      <TextInputs
        handleChange={handleChange}
        values={[values.title, values.content]}
      />
      <Selects
        handleChange={handleChange}
        values={[
          values.size,
          values.animation,
          values.position,
        ]}
      />
      <StyledColorSettingContainer>
        <ColorCheckBox
          values={values.checkbox}
          handleChange={handleChange}
        />
        {!values.checkbox && (
          <ColorInputs
            handleChange={handleChange}
            values={[values.color, values.bgcolor]}
          />
        )}
      </StyledColorSettingContainer>

      <RadioContainer
        handleChange={getFieldProps(values.type).onChange}
      />
      <InputNumber
        value={values.delay}
        handleChange={handleChange}
      />

      <StyledButtonSubmit type="submit" onClick={someClick}>
        Submit
      </StyledButtonSubmit>
    </StyledForm>
  )
}

export default ToastForm
