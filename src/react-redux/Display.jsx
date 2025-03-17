import { useSelector } from "react-redux";

const Display=()=>{
    const count=useSelector((state) => state.counter.count);
    return (
        <div>
            <p>Count in Display component: {count}</p>
        </div>
    );
};
export default Display;