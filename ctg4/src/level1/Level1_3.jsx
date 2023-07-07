import react, { setState, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

const handleSubmit = (event) =>{
    event.preventDefault();
    if(event.target.answer.value != 8){
        alert("Please try again!");
    }
    else{
        alert("Correct! +1 point");
        window.location.href = "/Level1_4";
    }
    
}

const Level1 = () => {


    return(
        <div>
            <h1>Level 1-3</h1>
                <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '35vh'}}>
                        <img src="../images/squares/square2_easy.png" alt="MUCS logo" width="300" height="250"/>
                </div>
                <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '35vh'}}>
                    <form onSubmit={handleSubmit}>
                        <label>
                            <label style={{padding: 10}}>Perimeter:</label>
                             
                            <input type="text" name="answer" />
                        </label>
                        <input type="submit" value="Submit" />
                    </form>
                    
                </div>
        </div>
    );
};
export default Level1;
