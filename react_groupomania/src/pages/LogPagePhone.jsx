import '../styles/Home.css';
import styled from 'styled-components';
import colors from '../utils/colors';
import Login from '../components/Login';
import SignUp from '../components/SignUp';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LightenDarkenColor } from 'lighten-darken-color';


function LogPagePhone(){

    const navigate = useNavigate();
    const token = JSON.parse(localStorage.getItem("tokenLS"));
    useEffect(()=>{if(token){navigate('/post');window.location.reload(true);}})


    const [isLoginShown,updateIsLoginShown] = useState(true);
    const [isSignUpShown,updateIsSignUpShown] = useState(false);

    return(
        <LogPageDesktopMain>
          <LogPageCard>
            <LogPageButtons>
              <LogPageLoginDiv>
                <LogPageLoginButton className='button-logs' onClick={()=>{
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
                <LogPageSignUpButton className='button-logs' onClick={()=>{
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
            </LogPageButtons>
            
            {isLoginShown && <Login/>}
            {isSignUpShown && <SignUp/>}

          </LogPageCard>            
        </LogPageDesktopMain>
    )
}

export default LogPagePhone

const LogPageCard = styled.div`
  width:100%;
`
const LogPageButtons = styled.div`
  padding:1%;
  gap:15%;
  display:flex;
  `
const LogPageDesktopMain = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
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
  width:50%;
  display:flex;
  flex-direction:column;
  align-items:center;
  `
const LogPageLoginForm = styled.div`
`
const LogPageSignDiv = styled.div`
  width:50%;

  display:flex;
  flex-direction:column;
  align-items:center;
`