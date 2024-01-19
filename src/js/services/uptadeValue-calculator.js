
export const updateValueOnButtonClick = (value, calculatorState) => {
    calculatorState.setCurrentValue((prevValue) => {
        if (prevValue === '0') {
            return value;
        } else {
            return  prevValue + value ;
        }
    });
    calculatorState.setCompleteOperation((prevOperation) => `${prevOperation} ${value}`);
};
