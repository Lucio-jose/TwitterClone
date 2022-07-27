import React from "react";
import{Container, Cima} from './style.js'
import  Header from "../../components/Header/index"; 
import Profile from "../../components/Profile/index.jsx";
import Feed from "../../components/FeedCenter/index.jsx";
import Sneak from "../../components/Sneak/index.jsx";

function Home(){
return(
    <> 
    <Container>
    <Header/>
        <Cima>
     <Profile/>
     <Feed/>
     <Sneak/>
     </Cima>
     </Container>
    </>
)
}
export default Home;