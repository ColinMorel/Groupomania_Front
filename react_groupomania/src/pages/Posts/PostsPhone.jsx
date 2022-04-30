import colors from '../../utils/colors';
import {instance} from '../../axios';
import styled from 'styled-components';
import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom"; //Link se comporte comme une balise anchor. A utiliser quand on souhaite naviguer pour l'accessibilité de l'app
import { useNavigate } from 'react-router-dom';
import { LightenDarkenColor } from 'lighten-darken-color';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

function PostsDesktop(){
    const navigate = useNavigate();
    const token = JSON.parse(localStorage.getItem("tokenLS"));
    let [postsList, setPostsList] = useState([]);
    let [currentUser,setCurrentUser] = useState({});

    function getAllPost(){
        instance.get('/post/find/all').then((response)=>{setPostsList(response.data)})
    }
    function userLS(){
        instance.get(`/user/find/${token.userId}`).then((response)=>{setCurrentUser(response.data[0])});
    }
    useEffect(()=>{
        getAllPost();
        userLS();
    },[]);

    
    
    function deletePost(post){
        if(post.UserId===token.userId || currentUser.administrator){
            instance.delete(`/post/delete/${post.id}`).then(() => {
                    console.log(`Post ayant l'id ${post.id} bien supprimé!`);
                    window.location='/post';
                })
                .catch(err => console.log(err));
        }
        else{alert("Vous n'êtes pas l'auteur de ce post, suppression impossible !")};        
    }
    const [isAddComShowned,setIsAddComShowned]=useState();
    const [whichComClicked,setWhichComClicked]=useState('');
    const [commentContent,setCommentContent]=useState('');
    
    function comClicked(e){
        if(whichComClicked!== e.currentTarget.id){
            setWhichComClicked('');
            setIsAddComShowned(false);
            setWhichComClicked(e.currentTarget.id);
            setIsAddComShowned(!isAddComShowned);
        }else{
            setWhichComClicked(e.currentTarget.id);
            setIsAddComShowned(!isAddComShowned);
        }        
    }
    function postComment(e,post){
        e.preventDefault();
        const comment = {
            content:commentContent,
            PostId:post.id,
            UserId:token.userId,
            author:currentUser.firstname
        }
        instance.post('/com/new',comment)
        .then(() => {window.location.reload(true);setIsAddComShowned(!isAddComShowned)})
        .catch(err => console.log(err));

    }
    function deleteCom(com){
        if(com.UserId===token.userId || currentUser.administrator){
            instance.delete(`/com/delete/${com.id}`).then(window.location.reload(true));
        }
        else{alert("Vous n'êtes pas l'auteur de ce commentaire, suppression impossible !")};
    }

    return(
        <>
            <PostHeader>
                <PostHeaderAdd>
                    <h2>Créer un post</h2>
                    <PostCreate to={"/CreatePost"}>+</PostCreate>
                </PostHeaderAdd>
            </PostHeader>
            <PostsColumn>
                {postsList.map((post) => (
                    <PostAndCom key={post.id}>
                        <PostOnly>
                            <PostOnlyHead>
                                <PostTitle>{post.author}</PostTitle>
                                <PostAuthor> le {post.createdAt.split("T")[0].split('-').reverse().join("/")}</PostAuthor>
                                {/* +", à " + post.createdAt.split("T")[1].split(":").slice(0,-1).join("h") */}
                            </PostOnlyHead>
                            <PostImage alt="" src={post.image} />
                            <PostContent>{post.content}</PostContent>
                            <PostContainerButtons>
                                <PostAddCom id={post.id} onClick={(e)=>{comClicked(e)}}>Comment</PostAddCom>
                                {isAddComShowned && whichComClicked==post.id ? (
                                    <AddComDiv>
                                        <input  style={{width:'70%'}}type="texte" onChange={(e)=>setCommentContent(e.target.value)}></input>
                                        <ComPost post={post} onClick={(e)=>postComment(e,post)}>Post</ComPost>
                                    </AddComDiv>
                                    ):(null)}
                                {currentUser.id===post.UserId || currentUser.administrator ?(
                                    <PostButtons>
                                        <PostEdit onClick={()=>{navigate(`/post/id?${post.id}`)}}>Edit</PostEdit>
                                        <PostDelete onClick={()=>deletePost(post)}>Delete</PostDelete>
                                    </PostButtons>
                                    ):(null)
                                }
                            </PostContainerButtons>
                        </PostOnly>
                        <ComOnly>
                            {post.Coms.map((com)=>(
                                <ComContainer key={com.id}>
                                    <ComLeft>
                                        <ComAuthor>{com.author}</ComAuthor>
                                        <ComContent>{com.content}</ComContent>
                                    </ComLeft>
                                    {currentUser.id===com.UserId || currentUser.administrator ?(
                                    <ComDelete type="button" name="delete_com" onClick={()=>deleteCom(com)}><FontAwesomeIcon icon={faTrash} size="lg" style={{ padding:'20%'}} /></ComDelete>):(null)}
                                </ComContainer>
                            ))}                                    
                        </ComOnly>
                    </PostAndCom>
                ))}
            </PostsColumn>
        </>        
    )
}


const ComContainer = styled.div`
    background-color:${colors.secondary};
    padding: 0 3%;
    width:95%;
    position:inherit;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
`
const ComLeft = styled.div`
`
const ComAuthor = styled.div`
    color:${colors.primary};
    height:fit-content;
    margin-right:5%;
    padding:3px;
`
const ComContent = styled.div`
    padding:10px;
    width:fit-content;
   
`
const ComDelete = styled.button`
    
    display:flex;
    align-items:center;
    justify-content:center;
    margin-left:10%;
    height:fit-content;
    background-color:${LightenDarkenColor(colors.primary,60)};
    border-radius:30px;
    border:1px solid ;
    border-top:2px solid ${colors.secondary};
`
const AddComDiv = styled.div`
    display:flex;
    flex-direction:row;
`
const PostAndCom = styled.div`
    border-radius:20px;
    padding:15px;
    height:fit-content;
    margin-bottom:10px;
    background-color:${LightenDarkenColor(colors.backgroundLight, 30)};
`
const PostOnlyHead = styled.div`
    width:100%;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
    margin:0 3% 0 0;
`
const PostOnly = styled.div`
    background-color:${colors.backgroundLight};
    padding:10px;
    border-radius:20px;
    margin-bottom:10px;
    border-top:2px solid ${colors.secondary};

`
const ComOnly = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    gap:10px;
`

const PostH1 = styled.h1`
    position:absolute;
    top:0;
    left:44%;
    color:${colors.primary}
`
const MainDiv = styled.div`
    padding-top:5%;
    padding-bottom:5%;
`
const PostPage = styled.div`
    height:100%;
`

const PostAuthor = styled.h2`
    font-size:1.3em;
    font-style:italic;
    width:fit-content;
`
const PostMain = styled.div`
    padding:0;
    width:100%;
`
const PostHeader = styled.div`
`
const PostHeaderAdd = styled.div`
    display:flex;
    justify-content:center;
    flex-direction:row;
    align-items:center;
    margin-top:10%;
`

const PostsColumn = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    gap:10px;
    
`
const PostContent = styled.div`
    padding:10px;
    
`
const PostImage = styled.img`    
    width:90%;
    height:fit-content;
    max-height:300px;
    border-radius:15px;
    padding-bottom:10px;
    margin:0 5%;
    object-fit: cover;    

`
const PostTitle = styled.h1`
    color:#13234a;
    margin:0px;
`
const PostContainerButtons = styled.div`
    display:flex;
    flex-direction:row;
    padding:5px;
    gap:5px;
    justify-content:end;
`
const PostAddCom = styled.button`
    background-color:${colors.secondary};
    border-radius:5px;
    border:1px solid ${LightenDarkenColor(colors.secondary,20)};
`
    const ComPost = styled.button`
        border-radius:5px;
    `

const PostButtons = styled.div`
    margin-right:5%;
    display:flex;
    flex-direction:row;
    gap:5%;
`
const PostDelete = styled.button`
    background-color:red;
    color:white;
    border-radius:5px;
    border:1px solid ${LightenDarkenColor(colors.secondary,20)};
`
const PostEdit = styled.button`
    color:black;
    text-decoration:none; 
    background-color:white;
    width:fit-content;
    height:fit-content;
    border:1px solid ${LightenDarkenColor(colors.secondary,20)};
    border-radius:5px;
    padding:5px;
`
const PostCreate = styled(Link)`
    display:flex;
    justify-content:center;
    align-items:center;
    text-decoration:none;
    border:1px solid black;

    width: 20px;
    height: 20px;
    margin-top:4px;
    padding-bottom:1px;
    margin-left:10px;
    border-radius: 50%;
    background-color: black ;
    color:white;
`
export default PostsDesktop