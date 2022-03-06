import * as actions from './actions'

export const KEYPAD_BUTTONS = [
  {
    id: 'num-7',
    symbol: ' 7 ',
    valueButton: '7',
  },
  {
    id: 'num-8',
    symbol: ' 8 ',
    valueButton: '8',
  },
  {
    id: 'num-9',
    symbol: ' 9 ',
    valueButton: '9',
  },
  {
    id: 'op-divide',
    numOperands: 2,
    symbol: ' ÷ ',
    valueButton: '/',
    calc: function (a, b) {
      return a / b
    },
  },
  {
    id: 'clear',
    symbol: ' C ',
    valueButton: 'C',
  },
  {
    id: 'num-4',
    symbol: ' 4 ',
    valueButton: '4',
  },
  {
    id: 'num-5',
    symbol: ' 5 ',
    valueButton: '5',
  },
  {
    id: 'num-6',
    symbol: ' 6 ',
    valueButton: '6',
  },
  {
    id: 'op-multiply',
    numOperands: 2,
    symbol: ' x ',
    valueButton: '*',
    calc: function (a, b) {
      return a * b
    },
  },
  {
    id: 'delete',
    symbol: ' del ',
    valueButton: 'CE',
  },
  {
    id: 'num-1',
    symbol: ' 1 ',
    valueButton: '1',
  },
  {
    id: 'num-2',
    symbol: ' 2 ',
    valueButton: '2',
  },
  {
    id: 'num-3',
    symbol: ' 3 ',
    valueButton: '3',
  },
  {
    id: 'op-subtract',
    numOperands: 2,
    symbol: ' - ',
    valueButton: '-',
    calc: function (a, b) {
      return a - b
    },
  },
  {
    id: 'equals',
    symbol: ' = ',
    valueButton: '=',
  },
  {
    id: 'period',
    symbol: ' . ',
    valueButton: '.',
  },
  {
    id: 'num-0',
    symbol: ' 0 ',
    valueButton: '0',
  },
  {
    id: 'op-negate',
    numOperands: 1,
    symbol: ' -',
    valueButton: '±',
    calc: function (a) {
      return -a
    },
  },
  {
    id: 'op-add',
    numOperands: 2,
    symbol: ' + ',
    valueButton: '+',
    calc: function (a, b) {
      return a + b
    },
  },
  {
    id: 'toggle-advanced',
    symbol: ' ᐁ ',
    valueButton: 'ᐁ',
  },
  {
    id: 'op-power',
    numOperands: 2,
    symbol: ' ^ ',
    valueButton: '^',
    calc: function (a, b) {
      return Math.pow(a, b)
    },
  },
  {
    id: 'num-pi',
    symbol: ' π ',
    valueButton: 'π',
  },
  {
    id: 'op-inverse-sin',
    numOperands: 1,
    symbol: ' sin-1 ',
    valueButton: 'asin',
    calc: function (a) {
      return Math.asin(a)
    },
  },
  {
    id: 'op-inverse-cos',
    numOperands: 1,
    symbol: ' cos-1 ',
    valueButton: 'acos',
    calc: function (a) {
      return Math.acos(a)
    },
  },
  {
    id: 'op-inverse-tan',
    numOperands: 1,
    symbol: ' tan-1 ',
    valueButton: 'atan',
    calc: function (a) {
      return Math.atan(a)
    },
  },
  {
    id: 'op-square-root',
    numOperands: 1,
    symbol: ' √',
    valueButton: '√',
    calc: function (a) {
      return Math.sqrt(a)
    },
  },
  {
    id: 'op-nth-root',
    numOperands: 2,
    symbol: '*√',
    valueButton: 'x*√',
    calc: function (a, b) {
      return Math.pow(b, 1 / a)
    },
  },
  {
    id: 'op-log',
    numOperands: 1,
    symbol: ' log ',
    valueButton: 'log',
    calc: function (a) {
      return Math.log10(a)
    },
  },
  {
    id: 'op-natural-log',
    numOperands: 1,
    symbol: ' ln ',
    valueButton: 'ln',
    calc: function (a) {
      return Math.log(a)
    },
  },
  {
    id: 'op-sin',
    numOperands: 1,
    symbol: ' sin ',
    valueButton: 'sin',
    calc: function (a) {
      return Math.sin(a)
    },
  },
  {
    id: 'op-cos',
    numOperands: 1,
    symbol: ' cos ',
    valueButton: 'cos',
    calc: function (a) {
      return Math.cos(a)
    },
  },
  {
    id: 'op-tan',
    numOperands: 1,
    symbol: ' tan ',
    valueButton: 'tan',
    calc: function (a) {
      return Math.tan(a)
    },
  },
  {
    id: 'op-e',
    numOperands: 1,
    symbol: ' e ^ ',
    valueButton: 'e^x',
    calc: function (a) {
      return Math.exp(a)
    },
  },
  {
    id: 'bracket-left',
    symbol: ' ( ',
    valueButton: '(',
  },
  {
    id: 'bracket-right',
    symbol: ' ) ',
    valueButton: ')',
  },
]

/* export const OPERATORS = [
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
 */
