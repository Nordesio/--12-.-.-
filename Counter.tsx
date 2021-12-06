import { setPriority } from "os";
import React from "react"; // Подключение react.
import { useState } from "react";
import  Button  from './Button';
interface CounterProps {
    start: number;
    step: number;
}

interface ButtonProps {
    text: string;
    onClick: () => any; // TODO: Что это за пропс?
}



var Counter = (props: CounterProps) => {
  var step = props.step;
  var [ start, setCount ] = useState(props.start);
  var handleIncrease = () => {
    setCount(start + step);
  };
  return (
    <div>
      <div>Значение счётчика: {start}.</div>
      <p><Button text='Прибавить 5' onClick={handleIncrease}/></p> 
    </div>
  );
};
export default Counter;
