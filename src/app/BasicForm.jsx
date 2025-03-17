import { useState } from 'react';

function BasicForm() {
    const [formData, setFormData]=useState({name:'', email:''});
    const [errors, setErrors]=useState({});
    const validate=()=>{
      const newErrors={};
      if(!formData.name.trim()) {
        newErrors.name='Name is required';
      }
      return newErrors;
    };
    const handleSubmit=(e)=>{
      //prevent default behaviour which is submit here
      e.preventDefault();
      const validationErrors=validate();
      if(Object.keys(validationErrors).length>0){
        setErrors(validationErrors);
      } else {
        console.log('Form data submitted ', formData);
      } 
    };
    const handleChange=(e)=>{
      const {name, value}=e.target;
      console.log(e.target.value);
      setFormData({...formData, [e.target.name]:e.target.value})
      if(errors[name]){
        const newErrors={...errors};
        delete newErrors[name];
        setErrors(newErrors);
      }
    };
    return (
      <div>
        <h1>Form</h1>
        <form onSubmit={handleSubmit}>
          <label>Name:
          <input type='text' name='name' value={formData.name} onChange={handleChange}/>
            {errors.name && <span style={{color:'red'}}>{errors.name}</span>}<br/>
          </label>
          <label>Email:
          <input type='email' name='email' value={formData.email} onChange={handleChange}/>
          </label>
          <button type='submit'>Submit</button>
        </form>
      </div>
    );
}
export default BasicForm;