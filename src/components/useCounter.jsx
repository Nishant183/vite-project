import { useState } from 'react';

function useCounter(initialValue=0) {
  //custom hooks lets us reuse logic across multiple components, start with "use"
  const[count, setCount]=useState(0);
  const increment=()=>setCount(count+1);
  const decrement=()=>setCount(count-1);
  const reset=()=>setCount(initialValue);
  return {count, increment, decrement, reset};
}

export default useCounter;