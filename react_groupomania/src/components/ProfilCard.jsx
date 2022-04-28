import { Link } from "react-router-dom"
import styled from 'styled-components'
import colors from '../utils/colors';
import { useState, useEffect } from "react";
import axios from "axios";
import tokenLS from '../utils/tokenLS'

const ProfileCardMain = styled.div`
display:flex;
flex-direction:row;
position:fixed;
top:50%;
left:2%;
width:200px;
height:200px;
`
const ProfileCardRight = styled.div`
display:flex;
flex-direction:column;
width:50%;
`
const ProfileCardLeft = styled.div`
width:50%;
display:flex;
flex-direction:column;
border-radius:10px;
align-items:center;
justify-content:center;
// border:1px solid black;
background-color:${colors.backgroundLight};
`

const ProfileCardRightUp = styled.div`
    background-color:${colors.backgroundLight};
    border-radius:50%;
    display:flex;
    align-items:center;
    justify-content:center;
    width:100%;
    height:50%;
    margin-top:30%;
    margin-left:-4%;
    z-index:-1;
`
const ProfileCardRightDown = styled.div`
    background-color:${colors.backgroundLight};
    border-radius:0 10px 10px 0;
    width:100%;
    height:50%;
    display:flex;
    align-items:center;
    justify-content:center;
    padding-bottom:10px;
`
const ProfilCardImg = styled.img`
    border-radius:50%;
    width:90%;
    height:90%;
    padding:5px;
    object-fit: cover;
`
export default function ProfileCard(){
    const token = JSON.parse(localStorage.getItem("tokenLS"));
    let [user,setUser] = useState({});
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/user/find/${token.userId}`,{
            headers: {
              'Authorization': `token ${tokenLS()}`,
              'Access-Control-Allow-Origin': '*'
            }
        })
        .then((res) => setUser(res.data[0]))
        .catch(err => console.log("User pas bien recupéré:",err))
    },[]);

    return(
        <ProfileCardMain>
            <ProfileCardLeft>
                <label htmlFor="firstname" style={{'paddingRight':10}}>Firstname</label>
                <input id="firstname" type="firstname" style={{fontSize:'0.8em',width:'80%'}} value={user.firstname}/>
                <label htmlFor="lastname" style={{'paddingRight':10}}>Lastname</label>
                <input id="lastname" type="lastname" style={{fontSize:'0.8em',width:'80%'}} value={user.lastname}/>
                <label htmlFor="email" style={{'paddingRight':10}}>Email</label>
                <input id="email" type="email" style={{fontSize:'0.8em',width:'80%'}} value={user.email}/>
            </ProfileCardLeft>
            <ProfileCardRight>
                <ProfileCardRightUp>
                    <ProfilCardImg src={user.image} />
                </ProfileCardRightUp>
            </ProfileCardRight>
        </ProfileCardMain>
    )
}