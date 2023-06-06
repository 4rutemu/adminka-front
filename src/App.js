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

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isManager, setIsManager] = useState(false);

    function doLogIn() {
        setIsLoggedIn(true);
    }


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
            <Login setIsLoggedIn = {doLogIn()}/>
        )}
      </div>
  );
}

export default App;
