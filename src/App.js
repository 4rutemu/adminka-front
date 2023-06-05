import './App.css';
import {useState} from "react";
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';

import Login from "./components/Login";
import Navbar from "./components/NavBar";
import MainPage from "./components/MainPage";
import Workers from "./components/Workers";
import Products from "./components/Products";
import Categories from "./components/Categories";
import CreateUser from "./components/CreateUser";
import {Form} from "react-bootstrap";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isManager, setIsManager] = useState(false);


  return (
      <div>
        {isLoggedIn ? (
            <Router>
                <Navbar />
                <Routes>
                    <Route exact path='/main' element={<MainPage isManager={isManager} />} />
                    <Route path='/workers' element={<Workers />} />
                    <Route path='/products' element={<Products />} />
                    <Route path='/categories' element={<Categories />} />
                    <Route path='/registration' element={<CreateUser />} />
                </Routes>
            </Router>
        ) : (
            <Login setIsLoggedIn = {setIsLoggedIn}/>
        )}
      </div>
  );
}

export default App;
