import { toastService } from '../ToastService'
import {
  TOAST_POSITIONS,
  TOAST_TYPES,
  TOAST_SIZES,
} from '../constants'

export default {
  title: 'ToastService',
  component: toastService,
  argTypes: {
    toastPosition: {
      options: [
        TOAST_POSITIONS.top_left,
        TOAST_POSITIONS.top_right,
        TOAST_POSITIONS.bottom_left,
        TOAST_POSITIONS.bottom_right,
      ],
      control: { type: 'radio' },
    },
  },
}

const Template = (args) => toastService.addToast(args)

export const DefaultToastService = Template.bind({})

DefaultToastService.args = {
  toastPosition: TOAST_POSITIONS.top_left,
  toast: {
    label: 'Warning',
    toastType: TOAST_TYPES.warning,
    size: TOAST_SIZES.big,
  },
}
