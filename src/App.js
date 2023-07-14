import './styles/App.css';
import Header from './header';
import React from 'react';
import Skills from './skills';
import About from './about';
import Projects from './projects';
import ContactForm from './contact'

function App() {

 
  return (
    <div className="App">
      <Header/>
      <About/>
      <br/>
      <Skills />
      <br/>
      <Projects />
      <ContactForm/>
    </div>
  );
}

export default App;
