import Navigation from "../../components/Navigation"
import styled from "styled-components"
import { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom';
import Header from "../../components/Header";
import HeaderPhone from "../../components/HeaderPhone";

import { instance } from "../../axios";
import colors from "../../utils/colors";
import { useMediaQuery } from 'react-responsive';

const CreatePage = styled.div`
    display:flex;
    flex-direction:row;
    padding:0;
    width:100%;
`
const CreateHeader = styled.div`
    margin:10%;
    width:100%;
    min-height:50%;
`
const CreateForm = styled.form`
    width:30%;
    display:grid;
    grid-template-columns:1fr 400px;
    grid-template-row:repeat(5,1fr);
    gap:10px;
    background-color:${colors.backgroundLight};
    padding:3%;

` 
const CreatethisPost = styled.input`
    width:fit-content;
    gridColumn:1 ;
    color: white;
    background-color:${colors.primary};
    border-radius: 10px;
`

function CreatePost(){
    
    const [userLS,setUserLS] = useState({});
    const navigate = useNavigate();
    const token = JSON.parse(localStorage.getItem("tokenLS"));
    useEffect(()=>{
        if(!token){navigate('/');window.location.reload(true);};
        getUserLs();
    },[])

    const isDesktop = useMediaQuery({ query: '(min-width: 1300px)' });
    const isPhone = useMediaQuery({ query: '(max-width: 1300px)' });

    function getUserLs(){
        instance.get(`/user/find/${token.userId}`)
        .then((res) => setUserLS(res.data[0]))
        .catch(err => console.log("User pas bien recupéré:",err))
    }

    const [form,setForm] = useState({
        // title:"",
        content:"",
        image:""
    })
    function formUpdate(e){
        const newform = {...form};
        newform[e.target.id] = e.target.value;
        setForm(newform);
    }
    function FormPostFormData(e){
        e.preventDefault();
        var input = document.getElementById('image');
        var fd = new FormData();
        fd.append("image",input.files[0]);
        fd.append("UserId",JSON.parse(localStorage.getItem("tokenLS")).userId);
        fd.append("author",userLS.firstname);
        // fd.append("title",form.title);
        fd.append("content",form.content);
        console.log(input.files[0]);

        instance.post('/post/new',fd)
            .then(() => {navigate('/post', { replace: true })})
            .catch(err => console.log(err));
    }

    return(
        <CreatePage>
            {isDesktop && <Header/>}
            {isPhone && <HeaderPhone/>}
                <Navigation/>                
                <CreateHeader>
                    <h1>Création de post</h1>
                    <CreateForm enctype="multipart/form-data" onSubmit={(e)=>FormPostFormData(e)}>

                            {/* <label htmlFor="title" style={{gridColumn:1,gridRow:1}}>Titre du post</label>
                            <input id="title" type="texte" style={{gridColumn:2,gridRow:1}} onChange={(e)=>formUpdate(e)}/> */}

                            <label htmlFor="content" style={{width:'120px',gridColumn:1,gridRow:1}}>Contenu du post</label>
                            <textarea id="content" type="texte" onChange={(e)=>formUpdate(e)} style={{display:"overflow-wrap",width:'70%'}}/>

                            <label htmlFor="image" style={{marginRight:'5%'}}>Ajouter une image</label>
                            <input id="image" type="file" accept="image/jpg,image/jpeg,image/png"/>
                            {/* <input id="image" type="text" onChange={(e)=>formUpdate(e)}/> */}
                        <br/>
                        <CreatethisPost value="Créer ce post" type="submit"/>

                    </CreateForm>
                </CreateHeader>
        </CreatePage>   
    )
}
export default CreatePost