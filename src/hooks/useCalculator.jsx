import { useState } from "react";

export const useCalculatorState = () => {
  
    const [currentValue, setCurrentValue] = useState('0');
    const [pendingOperation, setPendingOperation] = useState(null);
    const [pendingValue, setPendingValue] = useState(null);
    const [completeOperation, setCompleteOperation] = useState('');
  
    return {
      currentValue,
      setCurrentValue,
      pendingOperation,
      setPendingOperation,
      pendingValue,
      setPendingValue,
      completeOperation,
      setCompleteOperation,
    };
  };