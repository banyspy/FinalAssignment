import React,{useState,useEffect} from 'react'
import './Top.css'

function Top({name}){
    return(
        <div className="Top">
            <div className="leftSide">
                <span id="name">Hello, {name}</span>
            </div>
            <div className="rightSide">
                <span id="loginbutton">Login</span>
            </div>
        </div>
        
        );
}

export default Top;