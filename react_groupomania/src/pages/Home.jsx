import '../styles/Home.css';
import styled from 'styled-components';
import colors from '../utils/colors';
import Login from '../components/Login';
import SignUp from '../components/SignUp';
import { useState } from 'react';

const HomeContainer = styled.div`
  display:flex;
  align-items:center;
  flex-direction:column;

  width:fit-content;
  height:fit-content;

  width:200px;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
`
const HomeLoginButton = styled.button`
  position:absolute;
  top:0;
  left:0;
  width:50%;
  background-color:${colors.secondary};
`
const HomeSignUpButton = styled.button`
  position:absolute;
  top:0;
  right:0;
  width:50%;
  background-color:${colors.secondary};
`
const HomeLogSignDiv = styled.div`
  display:flex;
  flex-direction:row;
  width:100%;
  margin-top:0px;
  position:absolute;
  top:0;
`

function Home(){
  const [isLoginShown,updateIsLoginShown] = useState(false);
  const [isSignUpShown,updateIsSignUpShown] = useState(false);
  console.log(isLoginShown,isSignUpShown);

  return (
    <HomeContainer>
      <HomeLogSignDiv>
        <HomeLoginButton to="/login" onClick={()=>{
          if(!isSignUpShown){
            updateIsLoginShown(!isLoginShown)
          }else{
            console.log("Un seul à la fois!")
            updateIsSignUpShown(!isSignUpShown)
            updateIsLoginShown(!isLoginShown)
          } 
        }}>
          Login
        </HomeLoginButton>
        {isLoginShown && <Login/> }
        <HomeSignUpButton to="/signUp" onClick={()=>{
          if(!isLoginShown){
            updateIsSignUpShown(!isSignUpShown)
          }else{
            console.log("Un seul à la fois!")
            updateIsLoginShown(!isLoginShown)
            updateIsSignUpShown(!isSignUpShown)
          }
        }}>
          SignUp
          </HomeSignUpButton>
        {isSignUpShown && <SignUp/>}
      </HomeLogSignDiv>
    </HomeContainer>
  )
}

export default Home;
