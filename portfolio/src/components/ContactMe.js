import React, {useState} from "react";

export default function ContactMe() {
    const[getEmail, setEmail] = useState('');
    const[getName, setName] = useState('');
    const[getText, setText] = useState('');

    return (
        <div>
            <div className="grid grid-cols-4 gap-4">
                <h1 className="col-start-2 col-span-2 mx-auto my-5 text-4xl">Contact Me</h1>
                <p className="col-start-2 col-span-2 mx-auto text-lg text-center"> Fill out the form below to get in touch with me.</p>
            </div>
            <div>
                <div className="w-full max-w-2xl p-4 bg-white border border-gray-200 rounded-lg shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto mt-20">
                    <form className="space-y-6" action="#">
                        <h5 className="text-xl font-medium text-gray-900 dark:text-white">Leave Your Message Here</h5>
                        <div>
                            <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                            <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" autoComplete="off" placeholder="Your Email" required/>
                        </div>
                        <div>
                            <label for="Name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                            <input type="Name" name="Name" id="Name" placeholder="Your Name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white " autoComplete="off" required/>
                        </div>
                        <div>
                            <label for="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Message </label>
                            <textarea type="message" name="message" id="message" placeholder="Your Message" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required/>
                        </div>
                        <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit Message</button>
                    </form>
                </div>
            </div>
        </div>
    )
}