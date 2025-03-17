import { useState } from "react";
import MouseTracker from "./MouseTracker";

function ParentComponent() {
    const[showComponent, setShowComponent]=useState(true);
    const toggleComponent=()=>{
        setShowComponent((prev)=>(!prev));
    };
    return (
        <div>
            <button onClick={toggleComponent}>
                {showComponent?'unmount tracker':'mount tracker'}
            </button>
            {showComponent && <MouseTracker/>}
        </div>
    );
}
export default ParentComponent;