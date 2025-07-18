import {useForm} from "react-hook-form";

import { useColorApi } from "../stores/useColorApi";
import { useState } from "react";

const LandingPage = () => {
    const [currentMood, setCurrentMood] = useState('');
    const [bgColor, setBgColor] = useState('ffffff');

    const colors = {
        Happy:'#9966cc',
        Sad:'#ffbf00',
        Focus:'#00bfff',
        Chill:'#00cc99',
    }

    async function handleClick(e) {
        const mood = e.target.textContent;
        setCurrentMood(mood);

        const color = mood.slice(-mood.lenth, -2).trim();
        const currentColor = colors[color];
        setBgColor(currentColor);
    }

    return (
        <div className="hero flex flex-col h-[80vh] p-10 gap-7">
            <div 
                className={"flex flex-col items-center h-3/4 w-3/4 p-10 justify-center rounded-2xl"} 
                style={{backgroundColor:bgColor,
                    transition: "ease-in 0.5s"
                }}
            >

                <h1 className="font-bold text-6xl">Choose Your Mood</h1>
                <p>Select your mood and we will create a playlist for your mood</p>

                <div className="w-20 text-center mt-2 mb-10 font-mono text-3xl" >
                    <span>{currentMood}</span>
                </div>

                {
                    currentMood === "" ? (
                        <div></div>
                    ) : (
                        <div>
                            <button className="btn btn-outline btn-error">Create Playlist</button>
                        </div>
                    )
                }
            </div>

            <div className="grid grid-cols-2 gap-5 w-[40%]">
                <button className="btn btn-soft btn-primary" onClick={handleClick}>Happy 😸</button>
                <button className="btn btn-soft btn-warning" onClick={handleClick}>Sad 😿</button>
                <button className="btn btn-soft btn-info" onClick={handleClick}>Focus 😌</button>
                <button className="btn btn-soft btn-success" onClick={handleClick}>Chill 😎</button>
            </div>
        </div>
    )
}

export default LandingPage;