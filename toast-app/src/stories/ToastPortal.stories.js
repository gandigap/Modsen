import ToastPortal from '../components/ToastPortal'
export default {
  title: 'Components/ToastPortal',
  component: ToastPortal,
}

const Template = (args) => <ToastPortal {...args} />

export const Simple = Template.bind({})
Simple.args = {
  label: 'simple',
}
