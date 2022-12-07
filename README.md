# __portfolio-with-react__

## Link to Deployed Application

[Click Here!](https://chanjeff520.github.io/portfolio-with-react/)

## Technology

- JavaScript: Programming Language used
- HTML: To create elements on the DOM
- Tailwind: To add styles to the elements created on the DOM
- Node.js: To run JavaScript without the browser
- npm: To install necessary modules and packages for this project
- React: To create the front end of the application
- Git: For version control to track changes to source code
- GitHub: To host the repository

## Description

This is a portfolio that was created using React. It has a header, navigation, project, and footer component. The navigation component is used to conditionally render the different sections of the portfolio. The project component is used multiple times in the portfolio section. The footer component appears on multiple pages. The application is deployed to GitHub Pages.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Code Snippets](#code-snippets)
- [Author](#author-links)


## Installation

  Dependencies needed: npm, inquirer, mysql2, node.js<br>
  Installation : (only follow this installation if this application was downloaded from GitHub)
   - install node.js via (https://nodejs.org/en/download/)
   - In the terminal, do 'npm install' package.json file. Make sure to do this within the directory with index.js.
   - Lastly install inquirer and mysql by 'npm i express' and 'npm i mysql2'. Again, do this within the directory with index.js

## Usage

![screenshot of the program running](./portfolio/src/images/reactPortfolio.gif)


## Credits

N/A

## License

N/A

## Code Snippets

```js
// Main component, switch between pages and render the page
export default function MainComponent() {
    const [getPage, setPage] = useState('AboutMe');

    // switch between pages
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
```

The code above displays the main component of the application. It uses a state to determine which page to render. It also uses a function to switch between pages. The navigation component is used to conditionally render the different sections of the portfolio. The footer component appears on multiple pages.

## Author Links

  You can reach me on
  GitHub: [__chanjeff520__](https://github.com/chanjeff520) <br>
  LinkedIn: [__Jeff chan__](https://www.linkedin.com/in/jefflchan/),<br>
  Email:  __chanjeff520@gmail.com__