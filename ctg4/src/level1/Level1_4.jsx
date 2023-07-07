import react, { setState, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

const handleSubmit = (event) =>{
    event.preventDefault();
    if(event.target.answer.value != 9){
        alert("Please try again!");
    }
    else{
        alert("Correct! +1 point");
        window.location.href = "/Level1_5";
    }
    
}

const Level1 = () => {


    return(
        <div>
            <h1>Level 1-4</h1>
                <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '35vh'}}>
                        <img src="../images/triangles/tri1_eq_easy.png" alt="MUCS logo" width="300" height="250"/>
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
