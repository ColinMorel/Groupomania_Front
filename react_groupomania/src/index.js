import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home'
import Profile from './pages/Profile'
import './styles/index.css';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/profil" element={<Profile/>}/>
      </Routes>
      {/* <Footer/> */}
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
console.log("testIndex")
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
