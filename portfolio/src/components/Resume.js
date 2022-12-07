import React from "react";
import resumePdf from "../images/JeffChanResume.docx.pdf"

// Resume component
export default function Resume() {
    return (
        <div>
            <div className="grid grid-cols-4 gap-4">
                <h1 className="col-start-2 col-span-2 mx-auto my-5 text-4xl">Resume</h1>
                {/* embed the resume on to the page, if the user want to download the resume, they are about to do it within the embedded doc */}
                <embed src={resumePdf} width="1000px" height="1200px"className="col-start-2 col-span-2 mx-auto my-5 "/>
            </div>

            <section className="flex flex-wrap justify-between mx-40">
                <div className="m-10 width-80">
                    <h2 className="text-2xl underline">Front End Proficiencies</h2>
                    <ul className="space-y-1 list-disc list-inside">
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>jQuery</li>
                        <li>Responsive Design</li>
                        <li>Bootstrap</li>
                        <li>Tailwind</li>
                        <li>Bulma</li>
                        <li>React</li>
                        <li>PWA (Progressive Web Application)</li>
                    </ul>
                </div>
                <div className="m-10 width-80">
                    <h2 className="text-2xl underline">Back End Proficiencies</h2>
                    <ul className="space-y-1 list-disc list-inside">
                        <li>Express</li>
                        <li>MySQL</li>
                        <li>MongoDB</li>
                        <li>Sequelize</li>
                        <li>Mongoose</li>
                        <li>REST</li>
                        <li>GraphQL</li>
                        <li>Relational Databases</li>
                        <li>NoSQL Databases</li>
                        <li>Object Relational Mapping (ORM)</li>
                        <li>Model View Controller (MVC)</li>
                    </ul>
                </div>
                <div className="m-10 width-80">
                    <h2 className="text-2xl underline">Other Proficiencies</h2>
                    <ul className="space-y-1 list-disc list-inside">
                        <li>Problem-Solving</li>
                        <li>Pseudocode</li>
                        <li>Heroku</li>
                        <li>GitHub</li>
                        <li>Git</li>
                        <li>Command Line</li>
                        <li>Web Develop Tools</li>
                        <li>Agile Methodologies</li>
                        <li>Project Management</li>
                        <li>Software Development Cycle</li>
                        <li>Web API</li>
                        <li>Server Side API</li>
                        <li>Third Party API</li>
                        <li>Object-Oriented Programming</li>
                        <li>Test-Driven Development</li>
                        <li>Node</li>
                        <li>ES6</li>
                        <li>Node Package Manager (NPM)</li>
                        <li>Model Control View (MVC)</li>
                        <li>Data Structures 
                            <ul className="pl-5 list-decimal list-inside">
                                <li>Array</li>
                                <li>Stack</li>
                                <li>Queue</li>
                                <li>Linked-List(SLL, DLL)</li>
                                <li>Binary Search Tress</li>
                                <li>Hashmaps</li>
                            </ul>
                        </li>
                        <li>Sort
                            <ul className="pl-5 list-decimal list-inside">
                                <li> Merge Sort</li>
                                <li> Quick Sort</li>
                                <li> Insertion Sort</li>
                                <li> Bubble Sort</li>
                                <li> Selection Sort</li>
                            
                            </ul>
                        </li>
                        <li>Time Complexity (Big O Notation)</li>
                    </ul>
                </div>
            </section>
        </div>
    )
}