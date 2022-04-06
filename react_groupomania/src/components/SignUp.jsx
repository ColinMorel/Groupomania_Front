import '../styles/Home.css';
import styled from 'styled-components';
import colors from '../utils/colors';

const SignUpContainer = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    margin-top:20px;
    background-color:${colors.backgroundLight}
`
const SignUpConnect = styled.button`
  margin-top:10px;
  color:${colors.primary};
`
const SignUpDivs = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
`

function SignUp(){
    return(
        <SignUpContainer>
            <SignUpDivs style={{paddingTop:10}}>
                <label style={{'paddingRight':10}}>Email</label>
                <input formcontrolname="email" type="email"></input>
            </SignUpDivs>
            <SignUpDivs>
                <label style={{'paddingRight':10}}>Password</label>
                <input formcontrolname="password" type="password"></input>
            </SignUpDivs>     
            <SignUpDivs>
                <label style={{'paddingRight':10}}>Nom</label>
                <input formcontrolname="name" type="firstName"></input>
            </SignUpDivs>    
            <SignUpDivs>
                <label style={{'paddingRight':10}}>Prénom</label>
                <input formcontrolname="name" type="lastName"></input>
            </SignUpDivs>    
            <SignUpConnect>Créer un compte</SignUpConnect>
        </SignUpContainer>
    )
}

export default SignUp