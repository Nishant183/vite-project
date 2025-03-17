import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

function UseForm() {
  const {register, handleSubmit, watch, reset, formState: {errors}}=useForm({mode:'onChange'});
  const onSubmit=(data)=>{
    console.log('Form data: ', data);
    reset();
  };
  const existingUsernames=['admin', 'user123', 'john'];
  const checkIfUsernameExist = async(username)=>{
    await new Promise(resolve=>setTimeout(resolve,1000));
    return existingUsernames.includes(username);
  };
  const watchedName=watch('name');
  const watchedEmail=watch('email');
  useEffect(()=>{console.log('Name: ', watchedName);},[watchedName]);
  useEffect(()=>{console.log('Email: ', watchedEmail);},[watchedEmail]);
  return (
    <div>
      <h1>Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Name: <input {...register('name', {required:'Name is required',//true
          minLength:{value:2, message:'Name should be atleast 2 characters'},
          validate: {isNotNumber:(value)=>isNaN(value)||'Name cannot be number',
            notAdmin:(value)=>value!=='Admin'||'Admin is not allowed',
            checkUsername:async (value)=>{
              const exist=await checkIfUsernameExist(value);
              return !exist||'Username already taken';
            }}})}/></label>
        {errors.name && <p>{errors.name.message}</p>}<br/>
        <label>Password: <input type='password' {...register('password', {
          required:true, minLength:2})}/></label><br/>
        <label>Confirm Password: <input type='password' {...register('confirmPassword', {
          required:true, minLength:2, 
          validate:value=>value===watch('password')||'Password does not match'})}/></label>
        {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}<br/>
        <label>Email: <input {...register('email', {
          pattern:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/})}/></label>
        {errors.email && <p>Email is not valid</p>}<br/>
        <button type='submit'>Submit</button>
        <button type='button' onClick={()=>reset()}>Reset</button>
      </form>
    </div>
  );
}
export default UseForm;