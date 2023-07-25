import react, { setState, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import Header from "./Header";
import Randomimage from "../components/randomimage"

const handleSubmit = (event) =>{
    event.preventDefault();
    if(event.target.answer.value != answer){
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
    "octagon"
];

const unit = ["in", "ft", "cm", "m", "none","none","none","none","none","none"];

const randomShape=shapes[Math.floor(Math.random() * shapes.length)];

const type = [
    "Perimeter",
    "Area",
];

const randomUnit=unit[Math.floor(Math.random() * unit.length)];

var randomType=type[Math.floor(Math.random() * type.length)];

if (randomShape == "octagon"){
    randomType = "Perimeter";
}
    

var randomN1 = Math.floor(Math.random() * (100 - 1) + 1);
var randomN2 = Math.floor(Math.random() * (100 - 1) + 1);
var randomN3 = Math.floor(Math.random() * 10);
var randomN4 = Math.floor(Math.random() * 10);
var randomN5 = Math.floor(Math.random() * 10);
var randomN6 = 0;
var randomN7 = 0;
var randomN8 = 0;

var temp;

var answer;

if(randomN1 > 10){
    temp = randomN1 % 10;
    randomN1 -= temp;
}   
if(randomN2 > 10){
    temp = randomN2 % 10;
    randomN2 -= temp;
}   

if(randomShape == "square"){
    randomN2 = 0;
    randomN3 = 0;
    randomN4 = 0;
    randomN5 = 0;

    if(randomType == "Perimeter"){
        answer = randomN1*4;
    }
    else if(randomType == "Area"){
        answer = randomN1*randomN1;
    }
}
else if(randomShape == "rectangle"){
    randomN4 = 0;
    randomN5 = 0;

    if(randomType == "Perimeter"){
        answer= (randomN1*2)+(randomN2*2);
    }
    else if(randomType == "Area"){
        answer = randomN1*randomN2;
    }
}
else if(randomShape == "triangle"){
    randomN4 = 0;
    randomN5 = 0;
}
else if(randomShape == "octagon"){
    randomN2 = 0;
    randomN3 = 0;
    randomN4 = 0;
    randomN5 = 0;

    if(randomType == "Perimeter"){
        answer = randomN1*8;
    }
}

if(randomUnit == "none"){
    randomType = randomType + ":";
}
else{
    randomType = randomType + " in " + randomUnit + ":";
    answer = answer + " " + randomUnit;
    randomN1 = randomN1 + " " + randomUnit;
    randomN2 = randomN2 + " " + randomUnit;
    randomN3 = randomN3 + " " + randomUnit;
    randomN4 = randomN4 + " " + randomUnit;
    randomN5 = randomN5 + " " + randomUnit;
}


const Level2 = () => {


    return(
        <div className="form-box">
            <h1>Level 2</h1>
                <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '35vh'}}>
                        <Randomimage shape =  {randomShape} num1 = {randomN1} num2 = {randomN2}/>
                </div>
                <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '35vh'}}>
                    <form onSubmit={handleSubmit}>
                        <label>
                            
                            <label style={{padding: 10} }>{randomType}</label>

                            <input type="text" name="answer" />
                        </label>
                        <input type="submit" value="Submit" />
                    </form>
                    
                </div>
        </div>
    );
};
export default Level2;
