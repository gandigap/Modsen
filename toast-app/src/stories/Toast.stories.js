import React from 'react'
import Toast from '@/components/ToastsContainer/Toast'
import {
  TOAST_TYPES,
  TOAST_SIZES,
  TOAST_ANIMATIONS,
} from '@/constants'

export default {
  title: 'Toast',
  component: Toast,
  argTypes: {
    animationType: {
      options: [
        TOAST_ANIMATIONS.horizontal,
        TOAST_ANIMATIONS.vertical,
      ],
      control: { type: 'radio' },
    },
    toastType: {
      options: [
        TOAST_TYPES.info,
        TOAST_TYPES.warning,
        TOAST_TYPES.error,
        TOAST_TYPES.success,
      ],
      control: { type: 'radio' },
    },
    size: {
      options: [
        TOAST_SIZES.small,
        TOAST_SIZES.medium,
        TOAST_SIZES.big,
      ],
      control: { type: 'select' },
    },
  },
}

const Template = (args) => <Toast {...args} />

export const DefaultToast = Template.bind({})

DefaultToast.args = {
  id: 0,
  title: TOAST_TYPES.info,
  content: TOAST_TYPES.info,
  size: TOAST_SIZES.small,
  animationType: TOAST_ANIMATIONS.horizontal,
  toastType: TOAST_TYPES.info,
  color: '',
  bgcolor: '',
  delay: 2000,
  handleClick: (id) => console.log(id),
}
