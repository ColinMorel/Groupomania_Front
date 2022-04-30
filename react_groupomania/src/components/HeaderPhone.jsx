import logo from '../img/icon-black.png';
import { Link } from "react-router-dom"; //Link se comporte comme une balise anchor. A utiliser quand on souhaite naviguer pour l'accessibilité de l'app
import styled from 'styled-components';
import colors from '../utils/colors';
import { instance } from '../axios';
import { useState,useEffect } from 'react';


const HeaderDiv = styled.nav`
    display:flex;
    flex-direction:row;
    align-items:center;
    position:fixed;
    height:5%;
    padding:0px;
    width:50%;
    border-radius: 0 0 20px 0;
    padding:10px;
    background-color:${colors.backgroundLight};
`
const StyledLink = styled(Link)`
    padding: 15px;
    color: white;
    text-decoration: none;
    font-size: 18px;
    ${(props)=>props.$isFullLink && `color: white; border-radius: 30px; background-color: ${colors.primary};`}
`
const LogoNav = styled.img`
    width:30px;
    height:30px;
`
const LogoTitle = styled.h1`
    padding-left:10px;
`
const LogoTogether = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    position:fixed;
    right:3%;
`
const NavigationWelcome = styled.h1`
    margin:0;
`
const FullBar = styled.div`
    position:fixed;
    top:0;
    width:100%;
    background-color:${colors.secondary};
    height:7.3%;
`
function HeaderPhone(){
    const token = JSON.parse(localStorage.getItem("tokenLS"));
    let [user,setUser] = useState({});
    useEffect(()=>{        
        instance.get(`/user/find/${token.userId}`)
        .then((res) => setUser(res.data[0]))
        .catch(err => alert("User pas bien recupéré:",err))
    },[]);

    return(
        <FullBar>
            <HeaderDiv>
                <NavigationWelcome>Bonjour, {user.firstname}</NavigationWelcome>
                <LogoTogether>
                    <LogoNav src={logo} className="Home-logo" alt="logo" />
                </LogoTogether>
            </HeaderDiv>
        </FullBar>
    )
}
export default HeaderPhone