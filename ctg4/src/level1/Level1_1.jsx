import react, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const handleSubmit = (event) => {
    event.preventDefault();
    alert("You submitted the form!");
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
                             
                            <input type="text" name="Perimeter" />
                        </label>
                        <input type="submit" value="Submit" />
                    </form>
                </div>
        </div>
    );
};
export default Level1;
