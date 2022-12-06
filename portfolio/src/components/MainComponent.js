import React, {useState} from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import AboutMe from "./AboutMe";
import Portfolio from "./Portfolio";
import ContactMe from "./ContactMe";
import Resume from "./Resume";

export default function MainComponent() {
    const [getPage, setPage] = useState('#AboutMe');

    const switchPages = () => {
        console.log(getPage)
        if(getPage === 'AboutMe') {
            return <AboutMe/>
        }else if(getPage === 'Portfolio') {
            return <Portfolio/>
        }else if(getPage === 'ContactMe') {
            return <ContactMe/>
        }else if(getPage === 'Resume') {
            return <Resume/>
        }
    }

    return (
        <div>
            <Navigation getPage={getPage} setPage={setPage}/>
            <div className= "flex flex-col h-screen justify-between">
                {switchPages()}
                <Footer/>
            </div>
        </div>
    )
}