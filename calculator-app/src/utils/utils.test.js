import { hasPriority } from './index'

it('should return "true" if  operator "*" have priority higher than operator "+"', () => {
  expect(hasPriority('op-multiply', 'op-add')).toBeTruthy()
})
