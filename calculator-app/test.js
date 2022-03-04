/* function expressionToRPN(expression) {
  let current = ''
  const stack = []
  let priority = null
  expression.split('').forEach((element) => {
    priority = getPriority(element)
    if (priority === 0) current += element
    if (priority === 1) stack.push(element)
    if (priority > 1) {
      while (!stack.length) {
        current += ' '
        if (
          getPriority(stack[stack.length - 1]) >= priority
        ) {
          current += stack.pop()
        } else break
      }
      stack.push(element)
    }

    if (priority === -1) {
      current += ' '
      while (getPriority(stack[stack.length - 1]) !== 1)
        current += stack.pop()
      stack.pop()
    }
  })
  while (!stack.length) current += stack.pop()
  console.log(current)
  return null
}

function rpnToExpression(string) {
  return null
}

function getPriority(operator) {
  if (operator === '*' || operator === '/') return 3
  if (operator === '+' || operator === '-') return 2
  if (operator === '(') return 1
  if (operator === ')') return -1
  return 0
}

console.log(expressionToRPN('2+2*2'))
 */

$(document).ready(function () {
  // Adds a token to the token list and updates the display
  function addToken(token) {
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

  // Updates the expression display's HTML
  function displayEquation() {
    var htmlString = ''
    for (var i = 0; i < tokenList.length; i++) {
      if (isNaN(tokenList[i])) {
        if (tokenList[i] === 'bracket-left') {
          htmlString += ' ('
        } else if (tokenList[i] === 'bracket-right') {
          htmlString += ') '
        } else if (tokenList[i] === 'num-pi') {
          htmlString += ' π '
        } else {
          htmlString += getOperator(tokenList[i]).symbol
        }
      } else {
        htmlString += tokenList[i]
      }
    }
    $('#expression').html(htmlString)
  }

  // Deletes the last entered token
  function deleteLast() {
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

  // Shows/hides the advanced operators panel
  function toggleAdvanced() {
    $('#advanced-buttons').toggle()
    if ($('#advanced-buttons').is(':visible')) {
      $('#toggle-advanced').removeClass('button-off')
      $('#toggle-advanced span')
        .removeClass('glyphicon-triangle-bottom')
        .addClass('glyphicon-triangle-top')
    } else {
      $('#toggle-advanced').addClass('button-off')
      $('#toggle-advanced span')
        .removeClass('glyphicon-triangle-top')
        .addClass('glyphicon-triangle-bottom')
    }
  }

  // Triggers the appropriate action for each button that can be pressed
  function processButton(button) {
    switch ($(button).attr('id')) {
      case 'delete':
        deleteLast()
        break
      case 'clear':
        if (tokenList.length === 0) {
          calcHistory.length = 0
          $('#calc-history-box').html('')
        } else {
          tokenList.length = 0
          displayEquation()
        }
        break
      case 'period':
        if (isNaN(tokenList[tokenList.length - 1])) {
          addToken('0.')
        } else {
          if (
            tokenList[tokenList.length - 1].indexOf('.') ===
            -1
          ) {
            tokenList[tokenList.length - 1] += '.'
          }
        }
        displayEquation()
        break
      case 'equals':
        calculate()
        break
      case 'toggle-advanced':
        toggleAdvanced()
        break
      case 'num-pi':
        addToken('num-pi')
        break
      default:
        if ($(button).hasClass('num')) {
          addToken($(button).html())
        } else {
          addToken($(button).attr('id'))
        }
    }
  }

  // Catches all button clicks on the page
  $('.btn').click(function (event) {
    $(event.target).blur()
    processButton(event.target)
  })

  $(document).on(
    'click',
    '.calc-history-eq',
    function (event) {
      var tokens =
        calcHistory[
          parseInt($(event.target).attr('id').substring(2))
        ].tokens
      console.log(
        parseInt($(event.target).attr('id').substring(2)),
      )
      console.log(calcHistory)
      console.log(tokens)
      tokenList = tokens
      displayEquation()
    },
  )
})
