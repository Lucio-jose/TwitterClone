import React from "react";
import{Container, Cima} from './style.js'
import  Header from "../../components/Header/index"; 
import Profile from "../../components/Profile/index.jsx";

function Home(){
return(
    <> 
    <Container>
    <Header/>
        <Cima>
     <Profile/>
     <span>Center</span>
     <h3>Right</h3>
     </Cima>
     </Container>
    </>
)
}
export default Home;