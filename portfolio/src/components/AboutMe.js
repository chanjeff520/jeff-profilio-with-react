import React from "react";
import selfPortrait from "../images/me.png";

// AboutMe component
export default function AboutMe() {
    return (
        <div>
            <div className="grid grid-cols-4 gap-4">
                <h1 className="col-start-2 col-span-2 mx-auto my-5 text-4xl">About Me</h1>
            </div>
            <article className="mx-20">
            <img className="rounded object-contain h-80 mx-auto my-5" src={selfPortrait} alt="self portrait"/>
                <p className="mb-5 text-center text-lg">
                    Hello! My name is Jeff Chan and I am a full stack web developer with a background in customer service and sales. 
                    Before that I was a student at the University of Delaware and pursuing a degree in environmental engineering. 
                    I am a self-taught developer who is passionate about learning new technologies and creating applications that are both functional and beautiful with experience in many programming like c, c++, Java, JavaScript, ect. 
                    I am currently looking for a full-time position as a web developer or an software engineer.
                </p>
            </article>
        </div>
    )
}