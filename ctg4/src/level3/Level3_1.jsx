import react, { setState, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

const handleSubmit = (event) =>{
    event.preventDefault();
    if(event.target.answer.value != 49){
        alert("Please try again!");
    }
    else{
        alert("Correct! +1 point");
        window.location.href = "/Level3_2";
    }
    
}

const Level1 = () => {


    return(
        <div>
            <h1>Level 3-1</h1>
                <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '35vh'}}>
                        <img src="../images/squares/square7_med.png" alt="MUCS logo" width="300" height="250"/>
                </div>
                <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '35vh'}}>
                    <form onSubmit={handleSubmit}>
                        <label>
                            <label style={{padding: 10}}>Area:</label>
                             
                            <input type="text" name="answer" />
                        </label>
                        <input type="submit" value="Submit" />
                    </form>
                    
                </div>
        </div>
    );
};
export default Level1;
