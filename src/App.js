import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from './Components/Login';
import SignUp from './Components/SignUp';


const App = () => {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh", backgroundColor: "#0d6efd" }}>
    <Router>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/SignUp' element={<SignUp/>}></Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
