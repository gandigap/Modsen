import * as actions from './actions'

export const KEYPAD_BUTTONS = [
  { value: 'c', action: actions.TOTAL_RESET },
  { value: '7', action: actions.SET_7 },
  { value: '8', action: actions.SET_8 },
  { value: '9', action: actions.SET_9 },
  { value: '*', action: actions.MULTIPLY },
  { value: '-', action: actions.SUBSTRACTION },
  { value: '4', action: actions.SET_4 },
  { value: '5', action: actions.SET_5 },
  { value: '6', action: actions.SET_6 },
  { value: '/', action: actions.DEVIDE },
  { value: '+', action: actions.ADDITION },
  { value: '1', action: actions.SET_1 },
  { value: '2', action: actions.SET_2 },
  { value: '3', action: actions.SET_3 },
  { value: '=', action: actions.EQUAL },
  { value: '.', action: actions.SET_FLOAT_POINT },
  { value: '(', action: actions.SET_LEFT_BRACKET },
  { value: '0', action: actions.SET_0 },
  { value: ')', action: actions.SET_RIGHT_BRACKET },
  { value: 'CE', action: actions.RESET_LAST_NUMBER },
]

export const OPERATORS = [
  {
    id: 'op-power',
    numOperands: 2,
    symbol: ' ^ ',
    calc: function (a, b) {
      return Math.pow(a, b)
    },
  },
  {
    id: 'op-negate',
    numOperands: 1,
    symbol: ' -',
    calc: function (a) {
      return -a
    },
  },
  {
    id: 'op-square-root',
    numOperands: 1,
    symbol: ' √',
    calc: function (a) {
      return Math.sqrt(a)
    },
  },
  {
    id: 'op-log',
    numOperands: 1,
    symbol: ' log ',
    calc: function (a) {
      return Math.log10(a)
    },
  },
  {
    id: 'op-natural-log',
    numOperands: 1,
    symbol: ' ln ',
    calc: function (a) {
      return Math.log(a)
    },
  },
  {
    id: 'op-sin',
    numOperands: 1,
    symbol: ' sin ',
    calc: function (a) {
      return Math.sin(a)
    },
  },
  {
    id: 'op-cos',
    numOperands: 1,
    symbol: ' cos ',
    calc: function (a) {
      return Math.cos(a)
    },
  },
  {
    id: 'op-tan',
    numOperands: 1,
    symbol: ' tan ',
    calc: function (a) {
      return Math.tan(a)
    },
  },
  {
    id: 'op-inverse-sin',
    numOperands: 1,
    symbol: ' sin-1 ',
    calc: function (a) {
      return Math.asin(a)
    },
  },
  {
    id: 'op-inverse-cos',
    numOperands: 1,
    symbol: ' cos-1 ',
    calc: function (a) {
      return Math.acos(a)
    },
  },
  {
    id: 'op-inverse-tan',
    numOperands: 1,
    symbol: ' tan-1 ',
    calc: function (a) {
      return Math.atan(a)
    },
  },
  {
    id: 'op-e',
    numOperands: 1,
    symbol: ' e ^ ',
    calc: function (a) {
      return Math.exp(a)
    },
  },
  {
    id: 'op-nth-root',
    numOperands: 2,
    symbol: '*√',
    calc: function (a, b) {
      return Math.pow(b, 1 / a)
    },
  },
  {
    id: 'op-multiply',
    numOperands: 2,
    symbol: ' x ',
    calc: function (a, b) {
      return a * b
    },
  },
  {
    id: 'op-divide',
    numOperands: 2,
    symbol: ' ÷ ',
    calc: function (a, b) {
      return a / b
    },
  },
  {
    id: 'op-add',
    numOperands: 2,
    symbol: ' + ',
    calc: function (a, b) {
      return a + b
    },
  },
  {
    id: 'op-subtract',
    numOperands: 2,
    symbol: ' - ',
    calc: function (a, b) {
      return a - b
    },
  },
]
