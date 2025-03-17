import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from '../store/actions/action';

const Counter=()=> {
    const count=useSelector((state) => state.counter.count);
    const dispatch=useDispatch();
    return (
        <div>
            <p>Count in Counter component: {count}</p>
            <button onClick={()=>dispatch(increment())}>Increment</button>
            <button onClick={()=>dispatch(decrement())}>Decrement</button>
        </div>
    );
  }
  
export default Counter;