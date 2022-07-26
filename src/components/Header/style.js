import styled from "styled-components";


export const Header = styled.header`
 background-color: white;
  height: 46px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.25);
  position: relative;
  z-index: 1;
  width: 100%;

  .content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}

nav {
  display: flex;
}
 nav li {
  display: flex;
  align-items: center;
  font-size: 13px;
  color: #667580;
  font-weight: bold;
  margin-right: 30px;
}
nav li:hover{
  cursor: pointer;
}
 nav li:last-child {
  margin: 0;
}
 nav li img {
  margin-right: 7px;
}

 div.side {
  display: flex;
}

 div.side input {
  border: 1px solid #e6ecf0;
  width: 220px;
  height: 34px;
  padding: 0 30px 0 12px;
  border-radius: 16px;
  color: #667581;
  font-size: 12px;
  background: #f5f8fa url('/images/search.svg') no-repeat 190px center;
}

 div.side img {
  width: 34;
  height: 34px;
  border-radius: 50%;
  margin: 0 15px;
}
 div.side button {
  height: 34px;
  background-color: #3bb9e3;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90px;
  font-weight: bold;
  color: #fff;
  font-size: 14px;
  border: 0;
  border-radius: 16px;
}
`
