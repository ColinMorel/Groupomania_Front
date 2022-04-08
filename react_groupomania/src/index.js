import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home'
import Profile from './pages/Profile'
import Posts from './pages/Posts/Posts';

import './styles/index.css';
import reportWebVitals from './reportWebVitals';
import Edit from './pages/Posts/Edit';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/profil" element={<Profile/>}/>
        <Route path="/post" element={<Posts/>}/>
        <Route path="/post/:id" element={<Edit/>}/>
      </Routes>
      {/* <Footer/> */}
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
