import { OPERATORS } from 'constants'

export const calculate = (tokenList, displayContent) => {
  let count = 0

  for (let index = 0; index < tokenList.length; index++) {
    if (tokenList[index] === 'bracket-left') {
      count++
    } else if (tokenList[index] === 'bracket-right') {
      count--
    }
  }
  if (count !== 0) {
    output('Error: unbalanced brackets')
    return
  }

  let valuesStack = []
  let operatorsStack = []

  for (let index = 0; index < tokenList.length; index++) {
    if (!isNaN(tokenList[index])) {
      valuesStack.push(tokenList[index])
    } else if (tokenList[index] === 'num-pi') {
      valuesStack.push(Math.PI)
    } else if (tokenList[index] === 'bracket-left') {
      operatorsStack.push(tokenList[index])
    } else if (tokenList[index] === 'bracket-right') {
      while (
        operatorsStack[operatorsStack.length - 1] !==
        'bracket-left'
      ) {
        let operator = getOperator(operatorsStack.pop())
        if (operator.numOperands === 1)
          valuesStack.push(
            applyOperator(operator, [valuesStack.pop()]),
          )
        else
          valuesStack.push(
            applyOperator(operator, [
              valuesStack.pop(),
              valuesStack.pop(),
            ]),
          )
      }
      operatorsStack.pop()
    } else {
      while (
        operatorsStack.length > 0 &&
        hasPriority(
          operatorsStack[operatorsStack.length - 1],
          tokenList[index],
        )
      ) {
        let operator = getOperator(operatorsStack.pop())
        if (operator.numOperands === 1)
          valuesStack.push(
            applyOperator(operator, [valuesStack.pop()]),
          )
        else
          valuesStack.push(
            applyOperator(operator, [
              valuesStack.pop(),
              valuesStack.pop(),
            ]),
          )
      }
      operatorsStack.push(tokenList[index])
    }
  }

  while (operatorsStack.length > 0) {
    let operator = getOperator(operatorsStack.pop())
    if (operator.numOperands === 1)
      valuesStack.push(
        applyOperator(operator, [valuesStack.pop()]),
      )
    else
      valuesStack.push(
        applyOperator(operator, [
          valuesStack.pop(),
          valuesStack.pop(),
        ]),
      )
  }

  output(valuesStack[0], displayContent, tokenList)
}

function getOperator(operatorID) {
  for (let i = 0; i < OPERATORS.length; i++) {
    if (OPERATORS[i].id === operatorID) {
      return OPERATORS[i]
    }
  }
  return undefined
}

function output(out, expression, tokens) {
  const roundPlaces = 15
  out = +out.toFixed(roundPlaces)
  console.log(out.toString())
  let calcHistory = []
  calcHistory.push({
    out: out,
    expression: expression,
    tokens: tokens,
  })

  for (let i = calcHistory.length - 1; i >= 0; i--) {
    //добавляем в раздел истории

    console.log(calcHistory[i].expression)
    console.log(calcHistory[i].out)
  }
}

function applyOperator(operator, vals) {
  let valA = vals[0]
  let result

  if (vals.length === 1) {
    result = operator.calc(parseFloat(valA))
  } else {
    let valB = vals[1]
    result = operator.calc(
      parseFloat(valB),
      parseFloat(valA),
    )
  }

  return result
}

function hasPriority(op1, op2) {
  if (getOperator(op1) !== undefined) {
    return (
      getOperatorPriority(op1) <= getOperatorPriority(op2)
    )
  }
}

export const toDegrees = (radians) => {
  return radians * (180 / Math.PI)
}

export const toRadians = (degrees) => {
  return degrees * (Math.PI / 180)
}

function getOperatorPriority(opID) {
  for (let i = 0; i < OPERATORS.length; i++) {
    if (OPERATORS[i].id === opID) {
      return i
    }
  }
  return 1000
}

export const displayEquation = (tokenList) => {
  let htmlString = ''
  for (let index = 0; index < tokenList.length; index++) {
    if (isNaN(tokenList[index])) {
      if (tokenList[index] === 'bracket-left') {
        htmlString += ' ('
      } else if (tokenList[index] === 'bracket-right') {
        htmlString += ') '
      } else if (tokenList[index] === 'num-pi') {
        htmlString += ' π '
      } else {
        htmlString += getOperator(tokenList[index]).symbol
      }
    } else {
      htmlString += tokenList[index]
    }
  }
  //далее отправить на дисплей
  console.log(htmlString)
}

export const addToken = (token, tokenList) => {
  //Сначало нужно получить tokenList !!!!!!!!!!!!!!!!
  if (isNaN(token)) {
    if (
      (token === 'bracket-left' || token === 'num-pi') &&
      !isNaN(tokenList[tokenList.length - 1])
    ) {
      tokenList.push('op-multiply')
    }
    tokenList.push(token)
  } else {
    if (!isNaN(tokenList[tokenList.length - 1])) {
      tokenList[tokenList.length - 1] =
        tokenList[tokenList.length - 1] + token
    } else {
      if (
        !isNaN(token) &&
        (tokenList[tokenList.length - 1] ===
          'bracket-right' ||
          tokenList[tokenList.length - 1] === 'num-pi')
      ) {
        tokenList.push('op-multiply')
      }
      tokenList.push(token)
    }
  }

  displayEquation()
}

export const deleteLast = (tokenList) => {
  if (isNaN(tokenList[tokenList.length - 1])) {
    tokenList.pop()
  } else {
    tokenList[tokenList.length - 1] = tokenList[
      tokenList.length - 1
    ].slice(0, -1)
    if (tokenList[tokenList.length - 1].length === 0) {
      tokenList.pop()
    }
  }

  displayEquation()
}
