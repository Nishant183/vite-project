import { useState } from 'react';

function ColorPicker(){
    const [backgroundColor, setBackgroundColor]=useState('white');
    const colors=['red', 'green', 'blue', 'yellow', 'magenta', 'cyan', 'white', 'black'];
    const handleColorChange=(color)=>{
    setBackgroundColor(color);
    }
    return (
    <div className='App' style={{backgroundColor}}>
        <h1>Color Picker</h1>
        <div className='color-palette'>
        {colors.map((color, index)=>(
            <div key={index} 
                className='color-box' 
                style={{backgroundColor: color}}
                onClick={()=>handleColorChange(color)}></div>
        ))}
        </div>
        <div className='custom-color-picker'>
        <input type='color' value={backgroundColor} onChange={(e)=>{handleColorChange(e.target.value)}}></input>
        </div>
    </div>
    );
}
export default ColorPicker;