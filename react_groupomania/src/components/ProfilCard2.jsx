import styled from 'styled-components'
import colors from '../utils/colors';
import { useState, useEffect } from "react";
import { instance } from '../axios';

const ProfileCardMain = styled.div`

    border-radius:5%;
    position:fixed;
    top:10.5%;
    left:5%;
    width:400px;
    height:300px;
    background-color:${colors.backgroundLight}
`
const ProfilCardUp = styled.div`
    width:80%;
    height:50%;
    margin:5% 10%;
    display:flex;
    flex-direction:row;
    align-items:center;
    gap:15%;
    
`
const ProfilCardImg = styled.img`
    max-width:40%;
    height:100%;
    border-radius:50%;
    object-fit: cover;
    border:2px solid ${colors.secondary};
`
const ProfilCardNames = styled.div`
    height:fit-content;
    max-height:50%;
    gap:20px;
    display:flex;
    flex-direction:column;
`
const ProfilCardFLName = styled.h1`
font-size:1.3em;
margin:0;
`
const ProfilCardDown = styled.div`
    margin:5% 10%;
`
const ProfilCardEmail = styled.h3``
export default function ProfileCard(){
    const token = JSON.parse(localStorage.getItem("tokenLS"));
    let [user,setUser] = useState({});
    useEffect(()=>{
        instance.get(`/user/find/${token.userId}`)
        .then((res) => setUser(res.data[0]))
        .catch(err => console.log("User pas bien recupéré:",err))
    },[]);

    // var firstNameUpper = user.firstname.toUpperCase();
    // var lastNameUpper = user.lastname.toUpperCase();

    return(
        <ProfileCardMain>  
            <ProfilCardUp>
                <ProfilCardImg src={user.image}/>     
                <ProfilCardNames>
                    <ProfilCardFLName>{user.firstname}</ProfilCardFLName>
                    <ProfilCardFLName>{user.lastname}</ProfilCardFLName>
                </ProfilCardNames>           
            </ProfilCardUp>   
            <ProfilCardDown>
                <h3>{user.email}</h3>
                <texte>{user.bio}</texte>
            </ProfilCardDown>      
        </ProfileCardMain>
    )
}