import Post from '../../components/Post';
import Navigation from '../../components/Navigation';
import colors from '../../utils/colors';

import { useState, useEffect } from 'react';
import React from 'react';
import axios from 'axios';
import styled from 'styled-components';


const PostPage = styled.div`
    display:flex;
    flex-direction:row;
    margin:0px;
`
const PostMain = styled.div`
    margin:0 3%;
    padding:0;
    width:100%;

`
const PostHeader = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content: space-between;
`
const PostHeaderAdd = styled.div`
    display:flex;
    justify-content:center;
    flex-direction:row;
    align-items:center;
`
const PostButtonAdd = styled.button`
    display:flex;
    justify-content:center;

    width: 20px;
    height: 20px;
    margin-top:4px;
    margin-left:10px;
    border-radius: 50%;
    background-color: ${colors.backgroundLight} ;
`
const PostOnly = styled.div`
    display:flex;
    flex-direction:row;
    gap:10px;
`

function GetAllPosts(){
    let [postsList, setPostsList] = useState([]);

    useEffect(()=>{
        axios({
            method: 'get',
            url:'http://localhost:8000/api/post/find/all'
        }).then((response)=>{
            console.log(response.data)
            setPostsList(response.data)
            })
    },[])
    
    return(

        <PostPage>
            <Navigation/>
            <PostMain>                
                <PostHeader>
                    <h1>Liste de Posts</h1>
                    <PostHeaderAdd>
                        <h2>Créer un post</h2>
                        <PostButtonAdd>+</PostButtonAdd>
                    </PostHeaderAdd>
                </PostHeader>
                <PostOnly>
                    {postsList.map((post) => {return Post(post)})}
                </PostOnly>
            </PostMain>
        </PostPage>       
    )
}
export default GetAllPosts