import Home from '.././components-routing/Home';
import About from '.././components-routing/About';
import Team from '.././components-routing/Team';
import Dashboard from '.././components-routing/Dashboard';
import CurrentLocation from '.././components-routing/CurrentLocation';
import NotFound from '.././components-routing/NotFound';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function RouteApp() {
    return (
      <Router>
        <div className='div-router'>
        <nav className='nav-router'>
          <ul className='ul-router'>
            <p><Link to="/">Home</Link></p>
            <p><Link to="/about">About</Link></p>
          </ul>
        </nav>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/about' element={<About />}>
              <Route path='team' element={<Team />}/>
            </Route>
            <Route path='/dashboard' element={<Dashboard />}/> 
            <Route path='*' element={<NotFound />}/>
        </Routes>
        <CurrentLocation/>
        </div>
      </Router>
    );
}
export default RouteApp;  