import logo from '../img/icon-black.png';
import { Link } from "react-router-dom" //Link se comporte comme une balise anchor. A utiliser quand on souhaite naviguer pour l'accessibilité de l'app
import styled from 'styled-components'
import colors from '../utils/colors';

const Navigation = styled.nav`
    display:flex;
    flex-direction:row;
    align-items:center;

    padding:10px;
    background-color:${colors.backgroundLight};
`

const StyledLink = styled(Link)`
    padding: 15px;
    color: white;
    text-decoration: none;
    font-size: 18px;
    ${(props)=>props.$isFullLink && `color: white; border-radius: 30px; background-color: ${colors.primary};`}
`
const LogoNav = styled.img`
    width:30px;
    height:30px;
`

const LogoTitle = styled.h1`
    padding-left:10px;
`
const LogoTogether = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    position:fixed;
    right:3%;
`

function Header(){
    return(
        <Navigation>
            <StyledLink to="/">Accueil</StyledLink>
            <StyledLink to="/profil" $isFullLink>Profil</StyledLink>
            <LogoTogether>
                <LogoNav src={logo} className="Home-logo" alt="logo" />
                <LogoTitle>Groupomania</LogoTitle>
            </LogoTogether>
        </Navigation>

    )
}
export default Header