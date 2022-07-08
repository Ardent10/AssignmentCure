import React from 'react';
import './App.css';
import { Navbar,StepsToFollow,Testimonials,Faq,Footer} from './Components';


const App = ()=> {
  return (
    <div>
      <Navbar/>
      {"Adding some Margin To Show the Difference."}
      <StepsToFollow/>
      <Testimonials/>
      <Faq/>
      <Footer/>
      
    </div>
  );
}

export default App;
