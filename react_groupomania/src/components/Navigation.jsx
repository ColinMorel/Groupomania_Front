import { Link } from "react-router-dom" //Link se comporte comme une balise anchor. A utiliser quand on souhaite naviguer pour l'accessibilité de l'app
import styled from 'styled-components'
import colors from '../utils/colors';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faUserNinja } from '@fortawesome/free-solid-svg-icons'
import { faBook } from '@fortawesome/free-solid-svg-icons'


const StyledLink = styled(Link)`
    padding: 15px;
    display:flex;
    justify-content:center;
    font-size: 18px;
    margin:5px;
    padding:10px;
    background-color:white;
    border-radius:50%;
    `
const NavigationHeader = styled.div`
    margin:10px;
    flex-direction:column;
    width:fit-content;    
    height:fit-content;
    border-radius:20px;
    background-color:${colors.secondary};
`



function Navigation(){
    return(
        <NavigationHeader>
            <StyledLink to="/"><FontAwesomeIcon icon={faHouse} size="xl" style={{ color: `${colors.primary}`}} /></StyledLink>
            <StyledLink to="/profil"><FontAwesomeIcon icon={faUserNinja} size="xl" style={{ color: `${colors.primary}`}} /></StyledLink>
            <StyledLink to="/posts"><FontAwesomeIcon icon={faBook} size="xl" style={{ color: `${colors.primary}`}} /></StyledLink>
        </NavigationHeader>

    )
}
export default Navigation