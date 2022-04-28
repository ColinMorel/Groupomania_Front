import '../styles/Home.css';
import styled from 'styled-components';
import colors from '../utils/colors';
import { useState, useEffect } from 'react';
import axios from 'axios';


const SignUpContainer = styled.form`
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
const SignUpConnect = styled.input`
  margin-top:10px;
  color:${colors.backgroundLight};
  margin-bottom:15px;
  font-size:0.8em;
`
const SignUpDivs = styled.div`
    font-size:1.5em;
    display:flex;
    flex-direction:column;
    align-items:center;
`

function SignUp(){
    const [data,setData] = useState({
        email:"",
        password:"",
        lastname:"",
        firstname:""
    })
    function dataUpdate(e){
        const newdata ={...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)
    }
    function SignUpPost(e){
        e.preventDefault();
            axios.post('http://localhost:8000/api/user/signup',data)
                .then(() => {
                    console.log("Signup successful:");
                    alert('Compte crée, veuillez vous logger.')
                    window.location = '/';
                })
                .catch(err => console.log(err));
                
    }
    return(
        <SignUpContainer onSubmit={(e)=>SignUpPost(e)}>
            <SignUpDivs style={{paddingTop:10}}>
                <label htmlFor='email' style={{'paddingRight':10}}>Email</label>
                <input  id="email" type="email" style={{fontSize:'0.8em',width:'80%'}}onChange={(e) => dataUpdate(e)}/>
                <div></div>
            </SignUpDivs>
            <SignUpDivs>
                <label htmlFor='password' style={{'paddingRight':10}}>Mot de passe</label>
                <input id="password" type="password" style={{fontSize:'0.8em',width:'80%'}}onChange={(e) => dataUpdate(e)}/>
                <div></div>
            </SignUpDivs>     
            <SignUpDivs>
                <label htmlFor='lastname' style={{'paddingRight':10}}>Nom</label>
                <input id="lastname" type="textearea" style={{fontSize:'0.8em',width:'80%'}}onChange={(e) => dataUpdate(e)}/>
                <div></div>
            </SignUpDivs>    
            <SignUpDivs>
                <label htmlFor='firstname'style={{'paddingRight':10}}>Prénom</label>
                <input id="firstname" type="texte" style={{fontSize:'0.8em',width:'80%'}}onChange={(e) => dataUpdate(e)}/>
                <div></div>
            </SignUpDivs>    
            <SignUpConnect className='button-log-page' value="Créer un compte" type="submit"/>
        </SignUpContainer>
    )
}

export default SignUp