import './style.css';

import { clearCalculator } from '../../js/services/clear-calculator';
import { updateValueOnButtonClick } from '../../js/services/uptadeValue-calculator';
import { OperationClick } from '../../js/services/OperationClick';
import { performOperation } from '../../js/services/performOperation ';
import { useCalculatorState } from '../../hooks/useCalculator';


export const Calculator = () => {
  const calculatorState = useCalculatorState();

  const keypadNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const operations = ['+', '-', '*', '/'];

  const handleNumberClick = (value) => updateValueOnButtonClick(value, calculatorState);

  const handleClearClick = () => clearCalculator(calculatorState);

  const handleOperation = (operation) => OperationClick(operation, calculatorState);

  const handleCalculate = () => performOperation(calculatorState);

  return (
    <div className="calculator">
      <div className="complete-operation">{calculatorState.completeOperation}</div>
      <div className="display">{calculatorState.currentValue}</div>

      <div className="buttons">
        <button className="set" onClick={() => handleClearClick()}>
          AC
        </button>

        {keypadNumbers.map((num, index) => (
          <button key={index} onClick={() => handleNumberClick(num)}>
            {num}
          </button>
        ))}

        {operations.map((operation, index) => (
          <button key={index} className="button" onClick={() => handleOperation(operation)}>
            {operation}
          </button>
        ))}

        <button className="set" onClick={handleCalculate}>
          =
        </button>
      </div>
    </div>
  );
};

