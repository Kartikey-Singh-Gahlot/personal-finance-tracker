"use client";
import {useState} from "react";
import "./output.css";
import "./input.css";
import Navigation from "./Navigation.jsx";


export default function Home() {

const [theme, setTheme] = useState({stat:0, theme:"light"});


function trgrTheme(){
  if(theme.stat==0){
    setTheme({stat:1, theme:"light"});
  }
  else{
    setTheme({stat:0, theme:"dark"});
  }
}

  return (
    <main className="mainWrapper">
       <header className={`headerWrapper ${(theme.stat==0)?"darkTheme":"lightTheme"}`}>
             <img  src={`${(theme.stat==0)?"/darkModeIcon.png":"/lightModeIcon.png"}`} className="h-5" onClick={trgrTheme}/>
             <h1 className="text-2xl  w-full text-center">Personal Finance Tracker</h1>
             <Navigation/>
       </header>
       <section className={`pages ${(theme.stat==0)?"lightTheme":"darkTheme"}`}>
               <div className={`flex items-center w-full box-border border-2  ${(theme.stat==0)?"lightTheme":"darkTheme"}`}>
                  <video src={(theme.stat==0)?"/pftLightThemeLogo.mp4":"/pftDarkThemeLogo.mp4"}  autoPlay muted loop className="h-100" />
                  <h1 className="w-full text-center"></h1>
               </div>
       </section>
       <section className={`pages ${(theme.stat==0)?"lightTheme":"darkTheme"}`}>
          two
       </section>
       <section className={`pages ${(theme.stat==0)?"lightTheme":"darkTheme"}`}>
         three
       </section>
      
    </main>
  );
}
