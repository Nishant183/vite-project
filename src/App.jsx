import './App.css';
import ParentComponent from './components/ParentComponent';
import useCounter from './components/useCounter';
import Home from './components-routing/Home';
import About from './components-routing/About';
import Team from './components-routing/Team';
import NotFound from './components-routing/NotFound';
import CurrentLocation from './components-routing/CurrentLocation';
import Dashboard from './components-routing/Dashboard';
import Counter from './react-redux/Counter';
import Display from './react-redux/Display';
import PostList from './react-redux/PostList';
import api from './api/api';
import axios from 'axios';
import { useState, useEffect, useRef, createContext, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import UseForm from './app/UseForm';
import BasicForm from './app/BasicForm';
import Redux from './app/Redux';
import Portfolio from './app/Portfolio';
import FormUseState from './app/FormUseState';
import NestedRoutes from './app/NestedRoutes';
import ClockUseEffect from './app/ClockUseEffect';
import ColorPicker from './app/ColorPicker';
import RouteApp from './app/RouteApp';
import HobbyProfile from './app/HobbyProfile';

function App() {
  const app=11;
  if(app===1) {
    return <UseForm/>;
  }
  if(app===2) {
    return <BasicForm/>;
  }
  if(app===3) {
    return <Redux/>;
  }
  if(app===4) {
    return <Portfolio/>;
  }
  if(app===5) {
    return <FormUseState/>;
  }
  if(app===6) {
    return <NestedRoutes/>;
  }
  if(app===7) {
    return <ClockUseEffect/>;
  }
  if(app===8) {
    return <ParentComponent/>;
  }
  if(app===9) {
    return <ColorPicker/>;
  }
  if(app===10) {
    return <RouteApp/>;
  }
  if(app===11) {
    return <HobbyProfile/>;
  }
  return <h1>Hello World!</h1>;
}

export default App

{/*

axios.interceptors.request.use(request=>{
  console.log('Starting Request');
  return request;});
axios.interceptors.request.use(response=>{
  console.log('Response', response);
  return response;});
function App() {
  const[data, setData]=useState();
  const handleSubmit=(event)=>{
    event.preventDefault();
    const newPost={title:'foo', body:'bar', userId:1};
    api.post('/posts', newPost)
    //axios.post('/posts', newPost)
      .then(response=>{setData(
        [response.data]);
        console.log(response.data);
      });
  };
  return (
    <div>
      <h1>Post API</h1>
      <form onSubmit={handleSubmit}>
        <button type='submit'>Add Post</button>
      </form>
    </div>
  );
}

//multiple api calls
axios.all([
  axios.get('https://jsonplaceholder.typicode.com/posts'),
  axios.get('https://jsonplaceholder.typicode.com/users')])
    .then(axios.spread((posts, users)=>{
      //response for data for single request
      setData(posts.data);
      setLoading(false);}))
    .catch((error)=>{
      setError('Failed to fetch the data');
      setLoading(false);
});

function App() {
  const[data, setData]=useState([]);
  const[loading, setLoading]=useState(true);
  const[error, setError]=useState(null);
  useEffect(()=>{
    setLoading(true);
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response=>response.json())
      .then(json=>{setData(json);
                  setLoading(false);
                  throw new Error('error')})
      .catch((error)=>{
        setError('Failed to fetch the data');
        setLoading(false);
      });
  }, []);
  if(loading) {
    return <p>Loading...</p>
  }
  if(error) {
    return <p>{error}</p>
  }
  return (
    <div>
      <h1>API's</h1>
      <ul>
        {data.map((post)=>(
          <li key={post.id}>
            <p><strong>{post.title}</strong></p>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

//custom hooks lets us reuse logic across multiple components, start with "use"
const {count, increment, decrement, reset}=useCounter();
return (
  <div>
    <h1>Custom Hooks</h1>
    <p>Counter: {count}</p>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
    <button onClick={reset}>Reset</button>
  </div>
);

const inputRef=useRef(null);
const focusInput=()=>{inputRef.current.style.backgroundColor='yellow';};
const focusReset=()=>{inputRef.current.style.backgroundColor='white';};
return (
  <div>
    <h1>useRef</h1>
    <input ref={inputRef} type='text' placeholder='Focus Me'></input>
    <button onClick={focusInput}>Focus</button>
    <button onClick={focusReset}>Reset</button>
  </div>
);

//persists values across renders
//doesn't cause the component to re-render when value changes
const[stateCount, setStateCount]=useState(0);
const refCount=useRef(0);
const incrementStateCount=()=>{
  setStateCount(stateCount+1);
};
const incrementRefCount=()=>{
  refCount.current+=1;
};
return (
  <div>
    <h1>State Count: {stateCount}</h1>
    <button onClick={incrementStateCount}>Incement State Count</button>
    <h1>Ref Count: {refCount.current}</h1>
    <button onClick={incrementRefCount}>Incement Ref Count</button>
  </div>
);

const[count, setCount]=useState(0);
//always, [] only once, [x] change in x
useEffect(()=>{
  document.title='Count: '+(count+1);
}, [count])
return (
  <div>
    <h1>useEffect Hook</h1>
    <button onClick={()=>setCount(count+1)}>Increment</button>
  </div>
);

const[counters, setCounters]=useState([{id:1, value:0}]);
const addCounters=()=>{setCounters([...counters, {id: counters.length+1, value:0}]);};
const incrementCounter=(id)=>{
  setCounters(counters.map(counter=>counter.id==id?{...counter, value:counter.value+1}:counter))
}
return (
  <div className='hooks'>
    <button className="button" onClick={addCounters}><b>Add Counter</b></button>
    <ul>
      {counters.map(counter=>(
        <p key={counter.id}><b>Counter</b> {counter.id} : {counter.value} 
        <button className="button" onClick={()=>{incrementCounter(counter.id)}}><b>Increment</b></button></p>
      ))}
    </ul>
  </div>
);

const[count, setCount]=useState(0);
const[step, setStep]=useState(1);
const incrementCount=()=>{setCount(count+step);};
//async - updater func for multiple state updates
const incrementTwice=()=>{setCount(count=>count+1);
                          setCount(count=>count+1);};
return (
  <div className='hooks'>
    <h2>Counter Value: {count}</h2>
    <input type='number'
           value={step}
           onChange={(e)=>setStep(parseInt(e.target.value))}/>
    <button className="button" onClick={incrementCount}>Increment</button>
    <button className="button" onClick={()=>setCount(count-step)}>Decrement</button>
    <button className="button" onClick={incrementTwice}>+2</button>
  </div>
);
*/}