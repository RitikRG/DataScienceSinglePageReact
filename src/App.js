import React from 'react';
import {Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import Pricingpage from './routes/Pricingpage';
import Faqpage from './routes/Faqpage';
import Contactpage from './routes/Contactpage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/pricingpage' element={<Pricingpage/>}/>
        <Route path='/faqpage' element={<Faqpage/>}/>
        <Route path='/contactpage' element={<Contactpage/>}/>
      </Routes>
      
    </>
  );
}

export default App;
