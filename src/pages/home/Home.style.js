import styled from "styled-components";
import backgroundimage from "../../img/background.jpg"
import { Link } from "react-router-dom";

export const MainConteiner = styled(Link)`
    min-height: 100vh;
    background-color: #000;
    color: #000;
    font-size: 2vw;
`

export const Part1 = styled.div`
    height: 100vh;
    background-image: url(${backgroundimage});
    background-position: center;
    background-size: cover;

`


export const Part2 = styled.div`
    height: 7vh;
    font-size: 4vh;
    padding-left: 35%;
    text-decoration: none;

`
    

export const Grid = styled.div`
    display: grid;
    width: 80%;
    justify-content: center;
    align-items: center;
    min-height: 20vh;
    grid-template-columns: repeat(auto-fit,  minmax(300px,1fr));
    margin: auto;
    gap: 3vw;
    padding: 10vh 0;
    color: #000;

 `