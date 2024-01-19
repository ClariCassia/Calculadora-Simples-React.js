export const performOperation = (calculatorState) => {   
   
    if (!calculatorState.pendingOperation || !calculatorState.pendingValue) {
        return
    }

    const num1 = parseFloat(calculatorState.pendingValue)
    const num2 = parseFloat(calculatorState.currentValue)

    let result

    switch (calculatorState.pendingOperation) {
        case '+':
            result = num1 + num2

            break;

        case '-':
            result = num1 - num2

            break;

        case '*':
            result = num1 * num2

            break;

        case '/':
            if (num2 !== 0) {
                result = num1 / num2
            } else {
                calculatorState.setCurrentValue('Error')
                calculatorState.setCompleteOperation('Error')
                calculatorState.setPendingOperation(null)
                calculatorState.setPendingValue(null)
                return
            }
            break;

        default:
            break;
    }

    calculatorState.setCompleteOperation( calculatorState.pendingValue + " " + calculatorState.pendingOperation + " " + calculatorState.currentValue )
    calculatorState.setCurrentValue( result.toString())
    calculatorState.setPendingOperation(null)
    calculatorState.setPendingValue(null)
}