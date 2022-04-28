import '../styles/Home.css';
import styled from 'styled-components';
import colors from '../utils/colors';
import Login from '../components/Login';
import SignUp from '../components/SignUp';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LightenDarkenColor } from 'lighten-darken-color';
import HeaderLogPage from '../components/HeaderLogPage';

const LogPageContainer = styled.div`
  width:100%;
  min-height:938px;
  display:flex;
  justify-content: space-between;
  flex-direction:row;
  background-color:${LightenDarkenColor(colors.backgroundLight,60)};
`
const LogPageLoginButton = styled.button`
  position:fixed;
  top:45%;
  left:44%;  
  width:fit-content;
  font-size:2em;
  border:2px solid ${LightenDarkenColor(colors.secondary,-60)};
  background-color:${colors.secondary};
`
const LogPageSignUpButton = styled.button`
  position:fixed;
  top:45%;
  left:50%;
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
const LogPageMain = styled.div`
`
function LogPage(){
  const navigate = useNavigate();
  const token = JSON.parse(localStorage.getItem("tokenLS"));
  useEffect(()=>{if(token){navigate('/post');window.location.reload(true);}})

  
  const [isLoginShown,updateIsLoginShown] = useState(true);
  const [isSignUpShown,updateIsSignUpShown] = useState(false);

  return (
    <LogPageMain>
      <HeaderLogPage/>
      <LogPageContainer>
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
          {isLoginShown && <Login/>}
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
          {isSignUpShown && <SignUp/>}
        </LogPageSignDiv>
      </LogPageContainer>
    </LogPageMain>

  )
}

export default LogPage;
