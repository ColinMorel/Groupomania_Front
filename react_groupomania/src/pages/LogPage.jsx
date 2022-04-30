import '../styles/Home.css';
import styled from 'styled-components';
import colors from '../utils/colors';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LightenDarkenColor } from 'lighten-darken-color';
import HeaderLogPage from '../components/HeaderLogPage';
import LogPageDesktop from './LogPageDesktop';
import LogPagePhone from './LogPagePhone';
import { useMediaQuery } from 'react-responsive';

const LogPageContainer = styled.div`
  width:100%;
  height:100vh;
  display:flex;
  align-items:center;
  justify-content:center;
  
`
const LogPageMain = styled.div`
background-color:${LightenDarkenColor(colors.backgroundLight,60)};
`

function LogPage(){
  const navigate = useNavigate();
  const token = JSON.parse(localStorage.getItem("tokenLS"));
  useEffect(()=>{if(token){navigate('/post');window.location.reload(true);}})
  const isDesktop = useMediaQuery({ query: '(min-width: 1300px)' });
  const isPhone = useMediaQuery({ query: '(max-width: 1224px)' })

  return(
    <LogPageMain>
      <HeaderLogPage/>
      <LogPageContainer>
         {isPhone && <LogPagePhone/>}
        {isDesktop && <LogPageDesktop/>}        
      </LogPageContainer>
    </LogPageMain>
  )
}

export default LogPage;