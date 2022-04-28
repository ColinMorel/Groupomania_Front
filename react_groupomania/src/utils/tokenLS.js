function recupTokenLS(){
    const UserInfo = JSON.parse(localStorage.getItem("tokenLS"));
    return UserInfo.token;
};

export default recupTokenLS