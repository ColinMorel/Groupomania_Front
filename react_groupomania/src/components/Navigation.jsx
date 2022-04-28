import { Link } from "react-router-dom" //Link se comporte comme une balise anchor. A utiliser quand on souhaite naviguer pour l'accessibilité de l'app
import styled from 'styled-components'
import colors from '../utils/colors';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faUserNinja } from '@fortawesome/free-solid-svg-icons'
import { faBook } from '@fortawesome/free-solid-svg-icons'
import { LightenDarkenColor } from "lighten-darken-color";


const StyledLink = styled(Link)`
    padding: 15px;
    display:flex;
    align-items:center;
    margin:5px;
    padding:10px;
    border-radius:50%;
    `
const NavigationHeader = styled.div`
    margin:10px;
    display:flex;
    flex-direction:row;
    width:fit-content;    
    height:5%;
    margin:10px;
    
    border-radius:20px;
    background-color:white;
    position: fixed;
    left:10%;
`



function Navigation(){
    return(
        <NavigationHeader>
            {/* <StyledLink style={{backgroundColor:LightenDarkenColor(colors.backgroundLight, 70)}} to="/homepage"><FontAwesomeIcon icon={faHouse} size="lg" style={{ color: `${colors.primary}`}} /></StyledLink> */}
            <StyledLink style={{backgroundColor:LightenDarkenColor(colors.backgroundLight, 70)}} to="/profil"><FontAwesomeIcon icon={faUserNinja} size="lg" style={{ color: `${colors.primary}`}} /></StyledLink>
            <StyledLink style={{backgroundColor:LightenDarkenColor(colors.backgroundLight, 70)}} to="/post"><FontAwesomeIcon icon={faBook} size="lg" style={{ color: `${colors.primary}`}} /></StyledLink>
        </NavigationHeader>

    )
}
export default Navigation