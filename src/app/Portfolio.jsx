import '../App.css';
import About from '.././components/About';
import Contact from '.././components/Contact';
import Footer from '.././components/Footer';
import Header from '.././components/Header';
import ProjectList from '.././components/ProjectList';

function Portfolio() {
    return (
        <div className='App'>
        <Header/>
        <About/>
        <ProjectList/>
        <Contact/>
        <Footer/>
        </div>
    );
  }
  export default Portfolio;