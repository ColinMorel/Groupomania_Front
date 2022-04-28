import React from 'react';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import LogPage from './pages/LogPage';
import Profile from './pages/Profile';
import Posts from './pages/Posts/Posts';
import CreatePost from './pages/Posts/CreatePost';

import './styles/index.css';
import EditPost from './pages/Posts/EditPost';

// Version 18 de react
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import { useState } from 'react';
import CheckTokenLS from './contexts/CheckTokenLS';
import Auth from './contexts/Auth';
import { useNavigate } from 'react-router-dom';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);


function isAuth(){
    var token = JSON.parse(localStorage.getItem("tokenLS"))
    if(token){
      console.log("token présent");
      return true;
    }
    else{console.log("Oh, token absent");return false;}
}


function App() {

    return (
        <Router>
            <Header/>
            <Routes>
                <Route exact path="/" element={<LogPage/>}/>
                <Route exact path="/homepage" element={() => isAuth()? (<HomePage/>) : (<LogPage/>)}/>
                <Route path="/profil" element={()=>isAuth? (<Profile/>):(<LogPage/>)}/>
                <Route exact path="/post" element={<Posts/>}/>
                <Route path="/post/:id" element={<EditPost/>}/>
                <Route path="/CreatePost" element={<CreatePost/>}/>
            </Routes>
            <Footer/>
        </Router>

  );
}

export default App;

