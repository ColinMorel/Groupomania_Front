import '../styles/Home.css';
import styled from 'styled-components';
import colors from '../utils/colors';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const HomeContainer = styled.div`
  display:flex;
  flex-direction:row;
  height:100%;
  width:100%;
  background-color:red;
`
const HomeProfil = styled.div`
  display:flex;
  flex-wrap: wrap;
  border-right:1px solid green;
  background-color:${colors.primary};
  height:100%;
  max-width:25%;
`
const HomeFeed = styled.div`
  display:flex;
  flex-wrap:wrap;
  background-color:${colors.secondary};
  height:100%;
  max-width:75%;
`

function Home(){
  const navigate = useNavigate();
  const tokenLS = JSON.parse(localStorage.getItem("tokenLS"));
  useEffect(()=>{if(!tokenLS){navigate('/');window.location.reload(true);}})
  return (
    <div>
      <Header/>
      <Navigation/>
      <HomeContainer>
        <HomeProfil>
          <div>Profil Profil Profil</div>
          <div>Profil Profil Profil</div>
        </HomeProfil>
        <HomeFeed>
          <div>Feed Feed Feed </div>
          <div>Feed Feed Feed </div>
        </HomeFeed>
    </HomeContainer>
    <Footer/>
    </div>
    )
}

export default Home;