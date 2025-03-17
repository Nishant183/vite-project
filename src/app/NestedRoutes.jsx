import { createContext, useContext } from 'react';

const ThemeContext=createContext('dark');
function NestedRoutes() {
  //Prop drilling <ComponentA theme={theme}/>
  //useContext removes dependency
  return (
    <ThemeContext.Provider value='light'>
    <div style={{border:'2px solid black', padding:'20px', backgroundColor:'lightsalmon'}}>
      <h2>App (Parent)</h2>
      <ComponentA/>
    </div>
    </ThemeContext.Provider>
  );
}
function ComponentA() {
  return (
    <div style={{border:'2px solid black', padding:'20px', backgroundColor:'lightblue'}}>
      <h2>ComponentA (Child)</h2>
      <ComponentB/>
    </div>
  );
}
function ComponentB() {
  return (
    <div style={{border:'2px solid black', padding:'20px', backgroundColor:'lightgreen'}}>
      <h2>ComponentB (GrandChild)</h2>
      <ThemedComponent/>
    </div>
  );
}
function ThemedComponent() {
  const theme=useContext(ThemeContext);
  return (
    <div style={{border:'2px solid black', padding:'20px', backgroundColor:'lightyellow'}}>
      <h2>ThemedComponent (Great-GrandChild)</h2>
      <div>The current theme is: {theme}</div>
    </div>
  );
}
export default NestedRoutes;