import Toast from '../components/Toast'
export default {
  title: 'Components/Toast',
  component: Toast,
  argTypes: { handleClick: { action: 'handleClick' } },
}

const Template = (args) => <Toast {...args} />

export const Red = Template.bind({})
Red.args = {
  label: 'info some',
}
