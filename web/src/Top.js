import React,{useState,useEffect} from 'react'
import './Top.css'
import { signInWithGoogle,auth } from "./services/firebase"
import firebase from './services/firebase'

function Top(){
    const [user, setUser] = useState(null);

    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
            setUser(user);
        })
    }, [])

    return(
        <div className="Top">
            <div className="leftSide">
                {
                    user ?
                    <span id="name">Hello, {user.displayName}</span>:
                    <span id="name">Welcome to pop cat</span> 
                }
            </div>
            <div className="rightSide">
                {
                    user ? 
                    <span onClick={() => auth.signOut()} id="loginbutton">Logout</span> :
                    <span onClick={signInWithGoogle} id="loginbutton">Login</span> 
                }
            </div>
        </div>
        
        );
}

export default Top;