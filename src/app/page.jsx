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
             <div className="flex">
                  <h1 className="text-2xl px-10  w-full text-center">Personal Finance Tracker</h1>
             </div>
             <Navigation/>
       </header>
       <section className={`pages ${(theme.stat==0)?"lightTheme":"darkTheme"}`}>
               <div className={`flex flex-col items-center justify-center w-full h-full py-20  box-border  ${(theme.stat==0)?"lightTheme":"darkTheme"}`}>
                   <img src={(theme.stat==0)?"/pftLightThemeLogo.png":"/pftDarkThemeLogo.png"} className="h-100 " />
                   <div className="flex items-center">
                     <h1 className="w-full border-t-2 p-1 border-b-red-500  box-bordertext-center  text-nowrap text-3xl font-bold">{`All Your Expenses Gets`}</h1>
                     <h1 className="w-full border-t-2 p-1 border-b-red-500  box-bordertext-center  text-nowrap text-3xl font-bold mb-20 mx-2">{ `𖦏 Tracked Here`}</h1> 
                   </div>      
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
