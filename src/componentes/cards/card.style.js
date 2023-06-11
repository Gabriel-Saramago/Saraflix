import styled from "styled-components";
import { Link } from "react-router-dom";

export const MainConteiner = styled(Link)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    width: 100%;
    border: 8px solid black;
    border-radius: 10px;
    text-decoration: none;
    color: #fff;
    background-color: #000;
    


    :hover{
        cursor: pointer;
        border-color: gold;
    }

    .infoContainer{
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 27%;
        align-self: center;
        font-size: 2vh;
    }



`

