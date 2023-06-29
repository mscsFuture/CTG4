import react, { setState, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

const handleSubmit = (event) =>{
    event.preventDefault();
    if(event.target.answer.value !== 165){
        alert("Please try again!");
    }
    else{
        alert("Correct! +1 point");
        window.location.href = "/Home";
    }
    
}

const Level1 = () => {


    return(
        <div>
            <h1>Level 3-5</h1>
                <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '35vh'}}>
                        <img src="../images/rectangles/rect18_hard.png" alt="MUCS logo" width="300" height="250"/>
                </div>
                <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '35vh'}}>
                    <form onSubmit={handleSubmit}>
                        <label>
                            <label style={{padding: 5}}>Area of the Rectangle:</label>
                             
                            <input type="text" name="answer" />
                        </label>
                        <input type="submit" value="Submit" />
                    </form>
                    
                </div>
        </div>
    );
};
export default Level1;
