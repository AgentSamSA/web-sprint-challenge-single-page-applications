import React from "react";
import { useHistory } from "react-router-dom";
import Pizza from "./Assets/Pizza.jpg";

export default function Home() {
    const history = useHistory();
    
    const routeToForm = () => {
        history.push("/pizza");
    }
    
    return(
        <div>
            <img src={Pizza} alt="big pizza banner"/>
            <button onClick={routeToForm}>Order Now!</button>
        </div>
    );
}