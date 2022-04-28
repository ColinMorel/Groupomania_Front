import '../styles/Home.css';
import styled from 'styled-components';
import colors from '../utils/colors';
import { useState } from 'react';
import axios from 'axios';


const LoginContainer = styled.form`
position:fixed;
top:48%;
left:42%;
display:flex;
width:12%;
height:fit-content;
flex-direction:column;
justify-content:center;
align-items:center;
margin-top:30px;
padding:0 2%;
border-radius:10px 20px ;
background-color:${colors.backgroundLight}
`
const LoginConnect = styled.input`
margin-top:10px;
color:${colors.backgroundLight};
margin-bottom:15px;
font-size:0.8em;
`
const LoginDivs = styled.div`
font-size:1.5em;
display:flex;
flex-direction:column;
align-items:center;
`

function Login(){
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState(""); 

    function handleLogin(e){
        e.preventDefault();
        const emailError = document.querySelector('.email_error');
        const passwordError = document.querySelector('.password_error');

        // console.log(e.target.email.value,e.target.password.value)
        axios.post('http://localhost:8000/api/user/login',{
            email:e.target.email.value,
            password:e.target.password.value,
        })
            .then((res) =>{
                if(res.data.errors){
                    console.log(res)
                    emailError.innerHTML=res.data.errors.email;
                    passwordError.innerHTML=res.data.errors.password;
                }else{
                    localStorage.setItem("tokenLS",JSON.stringify(res.data));
                    console.log("login effectué avec le token :",res.data.token,"et via l'userid n°",res.data.userId)
                    window.location = '/post';
                }
            })
            .catch(err => console.log("Erreur post",err));
    }


    return(
        <LoginContainer onSubmit={(e)=>handleLogin(e)} id="sign-up-form">
            <LoginDivs style={{paddingTop:10}}>
                <label htmlFor="email" style={{'paddingRight':10}}>Email</label>
                <input id="email" type="email" style={{fontSize:'0.8em',width:'80%'}}onChange={(e) => setEmail(e.target.value)} value={email}/>
                <div className="email_error" style={{color:"red",margin:"0px"}}></div>
            </LoginDivs>
            <LoginDivs>
                <label htmlFor="password" style={{'paddingRight':10}}>Mot de passe</label>
                <input id="password" type="password" style={{fontSize:'0.8em',width:'80%'}}onChange={(e) => setPassword(e.target.value)} value={password}/>
                <div className="password_error" style={{color:"red"}}></div>
            </LoginDivs>     
            <LoginConnect className='button-log-page' type="submit" value="Connect"/>
        </LoginContainer>
    )
}

export default Login