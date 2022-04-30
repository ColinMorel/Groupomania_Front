import { Link } from "react-router-dom"; //Link se comporte comme une balise anchor. A utiliser quand on souhaite naviguer pour l'accessibilité de l'app
import styled from 'styled-components';
import colors from '../utils/colors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';

const StyledLink = styled(Link)`
    width:20px;
    height:20px;
    padding: 15px;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size: 18px;
    border-radius:50%;
    margin:5px;
    padding:10px;
    background-color:white;
    `
const FooterHeader = styled.div`
    margin-top:100px;
    background-color:${colors.backgroundLight};
    position:fixed;
    bottom:0;
    left:0;
    width:fit-content;
    border-radius:0 10px 0 0;
`

function Footer(){
    function Disconnect(){
        localStorage.removeItem("tokenLS");
    }
    return(
        <FooterHeader>
            <StyledLink to="/" onClick={()=>{Disconnect()}}><FontAwesomeIcon alt="disconnect" icon={faPowerOff} size="xl" style={{ color: `${colors.primary}`}} /></StyledLink>
        </FooterHeader>
    )
}

export default Footer