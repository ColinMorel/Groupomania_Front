import Navigation from '../../components/Navigation';
import colors from '../../utils/colors';
import Edit from './Edit';

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

function newUrl(whichEditPressed){
    const url = `http://localhost:8000/api/post/${whichEditPressed}`;
    return  url;
}

function GetAllPosts(){
    let [postsList, setPostsList] = useState([]);
    let [whichEditPressed,setWhichEditPressed] = useState(0);
    let [isEditPressed,setIsEditPressed] = useState([false]);

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
                    {postsList.map((post) => (
                    <PostContainer key={post.id}>
                        <PostTitle>Post ayant l'Id numéro{post.id}</PostTitle>
                        <PostImage alt="" src={post.image} />
                        <PostContent>{post.content}</PostContent>
                        <PostContainerButtons>
                            <PostEdit id={post.id} to={newUrl(post.id)} onClick={(e)=>{
                                setWhichEditPressed(e.currentTarget.id)
                                if(isEditPressed[whichEditPressed]){
                                    console.log(whichEditPressed)
                                    setIsEditPressed(!isEditPressed)
                                }
                            }}>
                                Edit
                            </PostEdit>{ whichEditPressed == post.id ? <Edit id={post.id}/> : null
                        }
                            <PostDelete>Delete</PostDelete>
                        </PostContainerButtons>
                    </PostContainer>))}
                </PostOnly>
            </PostMain>
        </PostPage>       
    )
}

const PostContainer = styled.div`
    background-color:${colors.backgroundLight};
    border-radius:20px;
    display:flex;
    flex-direction:column;
    padding:15px;
    max-width:30%
`
const PostContent = styled.div`
    background-color:${colors.secondary};
    padding:10px;
    
`
const PostImage = styled.img`
    border-radius:15px;
    padding-bottom:10px;
`
const PostTitle = styled.h1`
    color:${colors.primary}
`
const PostContainerButtons = styled.div`
    display:flex;
    flex-direction:row;
    padding:5px;
    gap:5px;
    justify-content:end;
`
const PostDelete = styled.button`
    background-color:red;
    color:white;
`

const PostEdit = styled.button`

`

export default GetAllPosts