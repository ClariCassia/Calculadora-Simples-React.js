export const clearCalculator = (calculatorState) => {
        calculatorState.setCurrentValue('0');
        calculatorState.setPendingOperation(null);
        calculatorState.setPendingValue(null);
        calculatorState.setCompleteOperation('')
};