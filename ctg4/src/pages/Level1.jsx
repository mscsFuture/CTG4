import react, { setState, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import Header from "../pages/Header";
import "../components/randomimage"

const handleSubmit = (event) =>{
    event.preventDefault();
    if(event.target.answer.value != 8){
        alert("Please try again!");
    }
    else{
        alert("Correct! +1 point");
        Header.points += 1;
        window.location.href = "/Level1_2";
    }
    
}

const Level1 = () => {


    return(
        <div>
            <h1>Level 1-1</h1>
                <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '35vh'}}>
                        <randomimage/>
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