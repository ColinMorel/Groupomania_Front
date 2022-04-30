import React from 'react';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import HomePage from './pages/HomePage';
import LogPage from './pages/LogPage';
import Profile from './pages/Profile';
import Posts from './pages/Posts/Posts';
import CreatePost from './pages/Posts/CreatePost';
import Error from './components/Error';
import './styles/index.css';
import reportWebVitals from './reportWebVitals';
import EditPost from './pages/Posts/EditPost';

// Version 18 de react
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Router>
      <Routes>
        <Route exact path="/homepage" element={<HomePage/>}/>
        <Route exact path="/" element={<LogPage/>}/>
        <Route exact path="/profil" element={<Profile/>}/>
        <Route exact path="/post" element={<Posts/>}/>
        <Route exact path="/post/:id" element={<EditPost/>}/>
        <Route exact path="/CreatePost" element={<CreatePost/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </Router>
  </StrictMode>
  );
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
