import '../styles/Home.css';
import styled from 'styled-components';
import colors from '../utils/colors';

const LoginContainer = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    margin-top:20px;
    background-color:${colors.backgroundLight}
`
const LoginConnect = styled.button`
  margin-top:10px;
  color:${colors.primary};
`
const LoginDivs = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
`

function Login(){
    return(
        <LoginContainer>
            <LoginDivs style={{paddingTop:10}}>
                <label style={{'paddingRight':10}}>Email</label>
                <input formcontrolname="email" type="email"></input>
            </LoginDivs>
            <LoginDivs>
                <label style={{'paddingRight':10}}>Password</label>
                <input formcontrolname="password" type="password"></input>
            </LoginDivs>     
            <LoginConnect>Connect</LoginConnect>
        </LoginContainer>
    )
}

export default Login