import Navigation from '../../components/Navigation';
import colors from '../../utils/colors';
import Header from '../../components/Header';
import HeaderPhone from '../../components/HeaderPhone';
import Footer from '../../components/Footer';
import ProfileCard  from '../../components/ProfilCard';
import styled from 'styled-components';
import PostsDesktop from './PostsDesktop';
import PostsPhone from './PostsPhone';
import React from 'react';
import {  useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LightenDarkenColor } from 'lighten-darken-color';
import { useMediaQuery } from 'react-responsive';

function GetAllPosts(){
    const navigate = useNavigate();
    const token = JSON.parse(localStorage.getItem("tokenLS"));
    useEffect(()=>{if(!token){navigate('/');window.location.reload(true);}})
    const isDesktop = useMediaQuery({ query: '(min-width: 1300px)' });
    const isPhone = useMediaQuery({ query: '(max-width: 1300px)' });

    return(
        <PostPage style={{minHeight:'100vh',backgroundColor:LightenDarkenColor(colors.backgroundLight, 70)}}>
            {isPhone && <HeaderPhone/>}
            {isDesktop && <Header/>}
            {isDesktop && <ProfileCard/>}
            <Navigation/>
            <MainDiv>
                <PostMain>                
                    {isDesktop && <PostsDesktop/>}
                    {isPhone && <PostsPhone/>}                    
                </PostMain>
            </MainDiv>   
            <Footer/>  
        </PostPage>  
    )
}


const MainDiv = styled.div`
    padding-top:5%;
    padding-bottom:5%;
`
const PostPage = styled.div`
    height:100%;
`
const PostMain = styled.div`
    padding:0;
    width:100%;
`

export default GetAllPosts
