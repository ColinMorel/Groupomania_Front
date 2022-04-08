import { useState } from 'react';
import styled from 'styled-components';
import colors from '../utils/colors';
import Edit from '../pages/Posts/Edit';

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

function Post(postData){
    const [isEditPressed,setIsEditPressed] = useState(false);
    // const [isDeletePressed,setIsDeletePressed] = useState(false);


    return(
        <PostContainer>
            <PostTitle>Post ayant l'Id numéro{postData.id}</PostTitle>
            <PostImage alt="" src={postData.image} />
            <PostContent>{postData.content}</PostContent>
            <PostContainerButtons>
                <PostEdit onClick={()=>{
                    setIsEditPressed(!isEditPressed);
                }}>Edit</PostEdit>{isEditPressed && <Edit/>}

                <PostDelete>Delete</PostDelete>
            </PostContainerButtons>
        </PostContainer>
    )
}
export default Post