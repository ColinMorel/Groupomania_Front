import '../styles/Home.css';
import styled from 'styled-components';
import colors from '../utils/colors';
import { useNavigate } from 'react-router-dom';

const ErrorContainer = styled.div`
display:flex;
flex-direction:column;
align-items:center;
margin:0;
height:100%;
`
const ErrorTitle = styled.h1`
font-size:10em;
color:${colors.primary};
margin:0;
`
const ErrorSmallTitle = styled.h2`
font-size:2em;
color:${colors.secondary};
`
const ErrorButton = styled.button`
margin-top:1%;
border-radius:10px;
color:blue;
background-color:white;
border:4px dashed ${colors.backgroundLight} ;
`
function Error(){
    const navigate = useNavigate();
    // const tokenLS = JSON.parse(localStorage.getItem("tokenLS"));
    // useEffect(()=>{if(!tokenLS){navigate('/');window.location.reload(true);}})
    return (
      <ErrorContainer>
          <ErrorTitle>Error 404</ErrorTitle>
          <ErrorSmallTitle>Page not found</ErrorSmallTitle>
          {/* <FontAwesomeIcon icon={faSadTear} size='xl' style={{ color: `${colors.backgroundLight}`}} /> */}
          <ErrorButton style={{color:colors.primary}}onClick={()=>{navigate('/')}}>Retour à l'écran de Connexion</ErrorButton>
      </ErrorContainer>
      )
  }
  
  export default Error;