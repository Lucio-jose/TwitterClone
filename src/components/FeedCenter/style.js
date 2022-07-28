import styled from "styled-components";

export const Container = styled.div`
width: 47%;
background-color: white;
height: 280px;
margin-top: 10px;

#Publication{
    display: flex;
    background-color: #a7dff1;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 60px;

    img{
        width: 40px;
        height: 40px;
        border-radius: 100%;
    }
    input{
        width: 80%;
        height: 30px;
        border: none;
        border-radius: 7px;
        padding-left: 7px;
        margin-left: 10px;
    }
}
.main-feed{
        width: 100%;
        height: 150px;
        display: flex;
        justify-content: center;
        align-items: center;

        div{
            width: 75%;
            height: 140px;
            text-align: justify;

            button{
                background-color: #3bb9e3;
                width: 150px;
                height: 30px;
                border: none;
                border-radius: 10px;
            }
        }
    }
`