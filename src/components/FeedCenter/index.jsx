import React from "react";
import { Container } from "./style";
import Image from '../../assets/img/avatar.png'

function Feed(){
    return(
        <>
         <Container>
            <div id="Publication">
                <img src={Image}></img>
                <input type="text" id="" placeholder="What's happing" />
            </div>
            <div className="main-feed">
                <div>
                    <h2>Ola Mundo mundo</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lúcio José</p>
                    <button>Find people to follow</button>
                </div>
            </div>
         </Container>
        </>
    )
}
export default Feed