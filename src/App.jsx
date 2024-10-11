import './App.css';

import {Route,Routes} from 'react-router-dom';

import AboutUs  from './Pages/AboutUs.jsx';
import HomePage from './Pages/HomePage.jsx';
function App() {
  

  return (
    <>
      <Routes>
          <Route path="/" element={<HomePage/>}></Route>
          <Route path="/about" element={<AboutUs />} ></Route>
      </Routes>
    </>
  )
}

export default App
