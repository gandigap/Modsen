import { toastService } from '../ToastService'
import Toast from '../components/Toast'
import { TOAST_TYPES, TOAST_SIZES, TOAST_POSITIONS } from '../constants'

export default {
  title: 'Components/Toast',
  component: Toast,
  argTypes: {
    handleClick: { action: 'handleClick' },
    toastPosition: {
      options: [
        TOAST_POSITIONS.top_left,
        TOAST_POSITIONS.top_right,
        TOAST_POSITIONS.bottom_left,
        TOAST_POSITIONS.bottom_right,
      ],
      control: { type: 'radio' },
    },
    toastType: {
      options: [TOAST_TYPES.info, TOAST_TYPES.warning, TOAST_TYPES.error, TOAST_TYPES.success],
      control: { type: 'radio' },
    },
    size: {
      options: [TOAST_SIZES.small, TOAST_SIZES.medium, TOAST_SIZES.big],
      control: { type: 'select' },
    },
  },
}

const Template = ({ toastType, toastPosition }) =>
  toastService.displayToast(toastType, toastPosition)

export const DefaultToast = Template.bind({})

DefaultToast.args = {
  toastPosition: TOAST_POSITIONS.top_left,
  label: 'Info',
}
