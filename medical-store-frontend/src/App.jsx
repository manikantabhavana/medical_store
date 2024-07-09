import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Wrapper from './Pages/Wrapper/Wrapper';
import Mainpage from './Pages/Mainpage/Mainpage';
import Login from './Components/Login/Login';

function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path='' element={<Wrapper/>}>
            <Route path='/' element={<Mainpage/>}/>
            
          </Route>
          <Route path='login' element={<Login/>}/>

        </Routes>
      </Router>
     
    </>
  )
}

export default App
