import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/home'

function App() {
  return (
    
    <Router>
      <div className="App">
      <header className="App-header">

      {/* <Header /> */}

      <Routes>
        <Route path="/" element={<Home/>} />

        {/* <Route path='/add' element={<AddBookForm/>} /> */}
        


      </Routes> 

      </header>

      </div>
    </Router>
  );
}

export default App;