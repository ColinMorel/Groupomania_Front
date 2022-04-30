import styled from 'styled-components';
import Navigation from '../components/Navigation';
import '../styles/Profile.css'
import '../styles/Home.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import colors from '../utils/colors';
import {instance} from '../axios';

const ProfilePage = styled.div`
    position:fixed; 
    display:flex;
    flex-direction:row;
    height:100vh;
    width:100%;
    background: linear-gradient(70deg, #13234a, #3d625b);
    justify-content:center;
`
const ProfileCard = styled.div`
    position:fixed;
    top:20%;
    width:40%;
    height:30%;
    background-color:${colors.secondary};
    border:1px solid black;
    border-radius:30px;
    padding : 2%;
    display:flex;
    flex-direction:row;
    margin:5%;
    `
const ProfileLeftPart = styled.div`
    border-right:1px solid black;
    width:48%;
`
const ProfileRightPart = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center; 
    align-items:center;
    width:48%;
`
const ProfilePicture = styled.img`
    width:fit-content;
    height:60%;
    object-fit:cover;
    border-radius:25%;
    display:flex;
    align-items:center;
    justify-content:center;
    `
const ProfileInputFile = styled.input`
    color:${colors.primary};
`
const DeleteProfil = styled.button`
    width:fit-content;
    position:absolute;
    bottom:5%;
    right:5%;
    background-color:${colors.backgroundLight};
    border-radius:10px;
    border:0.3px solid black;
`
const EditProfil = styled.button`
    width:fit-content;
    position:absolute;
    bottom:5%;
    left:5%;
    border-radius:20px;
    border:1px solid grey;
`
function Profile (){
    const navigate = useNavigate();
    const token = JSON.parse(localStorage.getItem("tokenLS"));
    useEffect(()=>{if(!token){navigate('/');window.location.reload(true);}})
    
    let [user,setUser] = useState({});
    let [bio,setBio] = useState(user.bio);

    useEffect(()=>{
        getCurrentUser();
    },[]);   

    function getCurrentUser(){
        instance.get(`/user/find/${token.userId}`)
        .then((res) => setUser(res.data[0]))
        .catch(err => console.log("User pas bien recupéré:",err))
    }
    function UpdateProfil(){
        var input = document.getElementById('avatar');
        var fd = new FormData();
        fd.append("image",input.files[0]);  
        fd.append("bio",bio);     
        instance.put(`/user/edit/${token.userId}`,fd).then(getCurrentUser());
    }
    function DeleteProfil(){
        instance.delete(`/user/delete/${token.userId}`)
        .then(() => {
            alert(`User ayant l'id ${token.userId} bien supprimé!`);
            localStorage.removeItem("tokenLS");
            window.location='/';
        })
        .catch(err => console.log(err));
    }
    
    return(
        <ProfilePage>
            <Header/>
            <Navigation/>
            <ProfileCard >
                    <ProfileLeftPart>
                        <h1 style={{margin:0,paddingBottom:'10px'}}>Profil de {user.firstname}</h1>
                        <ProfilePicture alt="" src={user.image}/>
                        <br/>
                        <ProfileInputFile id="avatar" type="file"  accept="image/jpg,image/jpeg,image/png"/>
                        <EditProfil onClick={()=>{UpdateProfil()}}>Update Profil</EditProfil>
                    </ProfileLeftPart>
                    <ProfileRightPart>
                        <label style={{color:colors.primary}}htmlFor='email'>Email</label>
                        <input id="email" readOnly="readonly" value={user.email}></input>
                        <label style={{paddingTop:'20%',color:colors.primary}} htmlFor='bio'>Bio</label>
                        <textarea  id="bio"  placeholder={"Rédigez votre biographie"} type="texte" style={{width:'80%',height:'30%'}} onChange={(e)=>{setBio(e.target.value)}}/>
                        {/* <input readOnly="readonly" value={user.lasname}></input>
                        <input readOnly="readonly" value={user.firstname}></input> */}
                        <button className="button-delete-profil" onClick={()=>DeleteProfil()}>Delete User</button>
                    </ProfileRightPart>
            </ProfileCard>
            <Footer/>
        </ProfilePage>
    )         
}
export default Profile