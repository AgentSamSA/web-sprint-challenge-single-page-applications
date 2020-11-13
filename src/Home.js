import React from "react";
import { useHistory } from "react-router-dom";
import Pizza from "./Assets/Pizza.jpg";
import styled from "styled-components";

export default function Home() {
    const history = useHistory();
    
    const routeToForm = () => {
        history.push("/pizza");
    }
    
    return(
        <div className="home">
            <img src={Pizza} alt="big pizza banner"/>
            <div className="text"> test test
            <h1>Everyone likes pizza. Why not take a break and order some?</h1>
            <button onClick={routeToForm}>Order Now!</button>
            </div>
        </div>
    );
}

const StyledHome = styled.div`
    .home {
        position: relative;
    }
    .text {
        position: absolute;
        top: 45%;
    }
`;