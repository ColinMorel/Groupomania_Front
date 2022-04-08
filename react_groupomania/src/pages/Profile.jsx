import styled from 'styled-components';
import colors from '../utils/colors';
import Navigation from '../components/Navigation';

const ProfilePage = styled.div`
    display:flex;
    flex-direction:row;
    margin:0px;
`
const ProfileMain = styled.div`
    margin:0 3%;
    padding:0;
    width:100%;
`
const ProfileHeader = styled.div`
    
`


function Profile (){
    return(

        <ProfilePage>
            <Navigation/>
            <ProfileMain>
                <ProfileHeader>
                    <h1>Profil de {}</h1>

                </ProfileHeader>

            </ProfileMain>

        </ProfilePage>
    )
}
export default Profile