import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import sound from "../src/music/videoplayback.mp3"
import soundG from "../src/music/g.mp3"
function App() {
  const [thala, setThala] = useState(0);
  const [input, setInput] = useState("");
  const makeSound = () =>{
    var audio = new Audio(sound)
      audio.play();
  }
  const makeSoundG = () =>{
    var audio = new Audio(soundG)
      audio.play();
  }
  const checkThala = () => {
    console.log(input);
    if(input.length === 7 || input.length === 14 || input === "7"){
      setThala(1);
      makeSound();

    }else{
      makeSoundG()
      setThala(2)
    }
  };
  return (
    <div className={thala === 1 ? "thala" : thala === 2 ? "gambhir" : "App"}>
      <div className="nav">

        <h1 className="head">Are you in this world, because of Thala?</h1>

        <div>
          <input
            onChange={(e) => {
              setInput(e.target.value);
            }}
            type="text"
            placeholder="type here.."
            required
          />
          <button disabled={input === "" ? true : false} onClick={checkThala}>
            Check
          </button>
        </div>

      </div>
      {thala === 1 ? (
        <div className="res">{input}, Thala for a reason💛 <button className="retry" onClick={(e)=> window.location.reload() }>retry</button></div>
      ) : thala === 2 ?(
        <div className="res">IF YKYK {" "}<button className="retry" onClick={(e)=> window.location.reload() }>retry</button></div>
      ) : ""}
    </div>
  );
}

export default App;
