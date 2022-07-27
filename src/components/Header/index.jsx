import React from "react";
import{Header} from './style.js'
import Img from '../../assets/img/home.svg'
import Img01 from '../../assets/img/notification.svg'
import Img02 from '../../assets/img/message.svg'
import Img03 from '../../assets/img/logo.svg'
import Img04 from '../../assets/img/avatar.png'

function Head(){
return(
    <>
     <Header>
      <div class="content">
        <nav>
          <li><img src={Img} alt="home" /> Home</li>
          <li>
            <img src={Img01} alt="notification" />
            Notification
          </li>
          <li><img src={Img02} alt="message" /> Messages</li>
        </nav>
        <img src={Img03} alt="Logo" />
        <div class="side">
          <input type="search" placeholder="Search Twitter" />
          <img src={Img04} alt="Avatar" />
          <button>Tweet</button>
        </div>
      </div>
    </Header>
    </>
)
}
export default Head;