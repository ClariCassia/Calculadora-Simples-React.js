export const OperationClick = (operation,calculatorState) => {
    calculatorState.setCompleteOperation(calculatorState.currentValue + " " + operation ) ;
    calculatorState.setPendingOperation(operation);
    calculatorState.setPendingValue(calculatorState.currentValue );
    calculatorState.setCurrentValue('0');
}