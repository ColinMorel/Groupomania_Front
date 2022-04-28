function CheckTokenLS(){
    var token = JSON.parse(localStorage.getItem("tokenLS"))
    if(token){
        console.log("Token présent dans le LS")
        return true;
    }
}
export default CheckTokenLS