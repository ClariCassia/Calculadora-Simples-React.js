import React, { useState } from 'react'
import { clearCalculator } from '../../js/services/clear-calculator';
import { updateValueOnButtonClick } from '../../js/services/uptadeValue-calculator';
import { OperationClick } from '../../js/services/OperationClick';
import { performOperation } from '../../js/services/performOperation ';
import './style.css';

export const Calculator = () => {

  const [currentValue, setCurrentValue] = useState('0');
  const [pendingOperation, setPendingOperation] = useState(null);
  const [pendingValue, setPendingValue] = useState(null)
  const [completeOperation, setCompleteOperation] = useState('')

  const keypadNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
  const operations = ['+', '-', '*', '/']

  const calculatorState = {
    currentValue: currentValue,
    setCurrentValue: setCurrentValue,
    pendingOperation: pendingOperation,
    setPendingOperation: setPendingOperation,
    pendingValue: pendingValue,
    setPendingValue: setPendingValue,
    completeOperation: completeOperation,
    setCompleteOperation: setCompleteOperation
  }

  const handleNumberClick = (value) => updateValueOnButtonClick(value, calculatorState)

  const handleClearClick = () => clearCalculator(calculatorState);

  const handleOperation = (operation) => OperationClick(operation, calculatorState)

  const handleCalculate = () => performOperation(calculatorState)

  return (
    <div className="calculator">

      <div className="complete-operation">{completeOperation}</div>
      <div className="display">{currentValue}</div>

      <div className="buttons">
        <button className='set' onClick={() => handleClearClick()}>AC</button>

        {keypadNumbers.map((num, index) =>
          <button key={index} onClick={() => { handleNumberClick(num) }}>{num}</button>)}

        {operations.map((operation, index) =>
          <button key={index} className='button' onClick={() => handleOperation(operation)}>{operation}
          </button>)}

        <button className='set' onClick={handleCalculate}>=</button>

      </div>

    </div>
  )
}

