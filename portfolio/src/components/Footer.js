import React from "react";

export default function Footer () {
    return (
        <footer className="p-4 bg-white rounded-lg shadow md:flew md:items-center md:justify-between md:p-6 dark:bg-gray-800">
            <ul className="flex flex-wrap justify-center items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
                <li><a href="https://github.com/chanjeff520" className="mr-4 hover:underline md:mr-6">GitHub</a></li>
                <li><a href="https://www.linkedin.com/in/jefflchan/" className="mr-4 hover:underline md:mr-6">LinkedIn</a></li>
                <li><a href="https://medium.com/@chanjeff520" className="hover:underline">Medium</a></li>
            </ul>
        </footer>
    )
}