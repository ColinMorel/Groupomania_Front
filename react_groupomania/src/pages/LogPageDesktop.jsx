import '../styles/Home.css';
import styled from 'styled-components';
import colors from '../utils/colors';
import Login from '../components/Login';
import SignUp from '../components/SignUp';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LightenDarkenColor } from 'lighten-darken-color';

function LogPageDesktop(){

    const navigate = useNavigate();
    const token = JSON.parse(localStorage.getItem("tokenLS"));
    useEffect(()=>{if(token){navigate('/post');window.location.reload(true);}})


    const [isLoginShown,updateIsLoginShown] = useState(true);
    const [isSignUpShown,updateIsSignUpShown] = useState(false);

    return(
        <LogPageDesktopMain>
          <LogPageDesktopButtons>
            <LogPageLoginDiv>
                <LogPageLoginButton className='Button-logs' onClick={()=>{
                    if(!isSignUpShown){
                    updateIsLoginShown(!isLoginShown)
                    }else{
                    updateIsSignUpShown(!isSignUpShown)
                    updateIsLoginShown(!isLoginShown)
                    } 
                }}>
                Login
                </LogPageLoginButton>
            </LogPageLoginDiv>
            <LogPageSignDiv>
                <LogPageSignUpButton className='Button-logs' onClick={()=>{
                    if(!isLoginShown){
                    updateIsSignUpShown(!isSignUpShown)
                    }else{
                    updateIsLoginShown(!isLoginShown)
                    updateIsSignUpShown(!isSignUpShown)
                    }
                }}>
                SignUp
                </LogPageSignUpButton>
            </LogPageSignDiv>
          </LogPageDesktopButtons>
            
            {isLoginShown && <Login/>}
            {isSignUpShown && <SignUp/>}

        </LogPageDesktopMain>
    )
}

export default LogPageDesktop

const LogPageDesktopButtons = styled.div`
display:flex;
align-items:center;
justify-content:center;
gap:5%;
width:100%;
`
const LogPageDesktopMain = styled.div`
  width:fit-content;
  height:fit-content;
  display:flex;
  flex-direction:column;
  align-items:center;
`
const LogPageLoginButton = styled.button`
  width:fit-content;
  font-size:2em;
  border:2px solid ${LightenDarkenColor(colors.secondary,-60)};
  background-color:${colors.secondary};
`
const LogPageSignUpButton = styled.button`

  width:fit-content;
  font-size:2em;
  border:2px solid ${LightenDarkenColor(colors.secondary,-60)};
  background-color:${colors.secondary};
`
const LogPageLoginDiv = styled.div`
  display:flex;
  flex-direction:column;
  `
const LogPageSignDiv = styled.div`
  display:flex;
  flex-direction:column;
`