import react, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const handleSubmit = (event) => {
    event.preventDefault();
    if(event.target.answer.value != 20){
        alert("Please try again!");
    }
    else{
        alert("Correct! +1 point");
        this.setState({isCorrect: true});
    }
    
}
const Level1 = () => {
    return(
        <div>
            <h1>Level 1-1</h1>
                <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '35vh'}}>
                        <img src="../MUCS.png" alt="MUCS logo" width="250" height="250"/>
                </div>
                <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '35vh'}}>
                    <form onSubmit={handleSubmit}>
                        <label>
                            <label style={{padding: 10}}>Perimeter:</label>
                             
                            <input type="text" name="answer" />
                        </label>
                        <input type="submit" value="Submit" />
                        <br/>
                        <button type="button" class="btn btn-outline-success" disabled = {!isCorrect}></button>
                    </form>
                </div>
        </div>
    );
};
export default Level1;
