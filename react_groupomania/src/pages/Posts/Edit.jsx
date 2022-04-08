import Navigation from "../../components/Navigation"
import styled from "styled-components"

const EditPage = styled.div`
    display:flex;
    flex-direction:row;
    margin:0px;
`
const EditMain = styled.div`
    margin:0 3%;
    padding:0;
    width:100%;
`
const EditHeader = styled.div`
`

function Edit(){
    return(

        <EditPage>
            <Navigation/>
            <EditMain>                
                <EditHeader>
                    <h1>Edit du post</h1>
                </EditHeader>
            </EditMain>
        </EditPage>   
    )
}
export default Edit