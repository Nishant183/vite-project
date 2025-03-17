import { useState, useEffect } from 'react';

function ClockUseEffect() {
    const[time, setTime]=useState(new Date());
    useEffect(()=>{
    const timerId=setInterval(()=>setTime(new Date()), 1000);
    //clean up function
    return ()=>clearInterval(timerId);
    }, []);
    const formattedTime=time.toLocaleTimeString('en-IN', 
    {hour: '2-digit', minute: '2-digit', second: '2-digit'})
    return (
    <div className='clock-container'>
        <h1 className='clock'>{time.toLocaleTimeString()}</h1>
    </div>
    );
}
export default ClockUseEffect;