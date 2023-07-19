import react, { setState, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import Header from "./Header";
import Randomimage from "../components/randomimage"

const handleSubmit = (event) =>{
    event.preventDefault();
    if(event.target.answer.value != 8){
        alert("Please try again!");
    }
    else{
        alert("Correct! +1 point");
        Header.points += 1;
        window.location.reload(false);
    }
    
}

const shapes = [
    "square",
    "rectangle",
    "triangle",
    "octagon"
];

const randomShape=shapes[Math.floor(Math.random() * shapes.length)];

const Level1 = () => {


    return(
        <div className="form-box">
            <h1>Level 1</h1>
                <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '35vh'}}>
                        <Randomimage shape =  {randomShape}/>
                </div>
                <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '35vh'}}>
                    <form onSubmit={handleSubmit}>
                        <label>
                            <label style={{padding: 10}}>Periiimeter:</label>
                             
                            <input type="text" name="answer" />
                        </label>
                        <input type="submit" value="Submit" />
                    </form>
                    
                </div>
        </div>
    );
};
export default Level1;
