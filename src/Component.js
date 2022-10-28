import React, {useState} from "react";
import './_component.scss';
import logo from './images/logo.svg';
import woman from './images/hero-mobile.jpg';
import arrow from './images/icon-arrow.svg';
export default function Component(){
    const [name, setName]=useState("");
    function handleSubmit(event){
        event.preventDefault();
        if(name.indexOf('@')<1){
            return(<small>Please provide a valid email</small>);
        }
        console.log(name);
    }
    return(
        <div className="Component">
             <header>
                <nav>
                    <img src={logo} alt="logo"/>
                </nav>
            </header>
            <main>
            <div className="main-content">
                    <div className="main-content__text">
                        <h1>WE'RE <span>COMING SOON</span></h1>
                        <p>Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up-to-date with announcements and our launch deals.</p>
                        <form onSubmit={handleSubmit}>
                            <input placeholder="Email Address" type="email" value={name} onChange={(event)=>setName(event.target.value)}/>
                            {/* <input type="submit" name="submit"/> */}
                            <button type="submit"><img src={arrow} alt="arrow"/></button>
                        </form>
                    </div>
                    <div className="main-content__picture">
                        <img src={woman} alt="woman"/>
                    </div>
                
            </div>
           
            </main>
           
        </div>
    );
}