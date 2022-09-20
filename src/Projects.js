import pizzeriamarinara from "./images/pizzeriamarinara.png"
import calculator from "./images/calculator.png";
import portfolio from "./images/portfolio.png";
import quoteGenerator from "./images/quotegenerator.png";
import weatherapp from "./images/weatherapp.png";
import tictactoe from "./images/tictactoe.png";

const Projects = () => {
  return (
    <div className="projects">
      <div className="project">
        <div className="column-spaced">
          <h1>Pizzeria Marinara</h1>
          <p>I built a website for a local catering business.</p>
          <p>Technologies Used: React</p>
          <a
            href={
              "https://github.com/Javier-Ortiz-97/pizzeria-marinara/tree/master/src"
            }
            target="blank"
          >
            <p>Checkout the source code on GitHub</p>
          </a>
          <a href={"https://www.pizzeriamarinarasd.com/"} target="blank">
            <p>View the website live here</p>
          </a>
        </div>
        <div>
          <img src={pizzeriamarinara} alt="" />
        </div>
      </div>

      <div className="project">
        <div className="column-spaced">
          <h1>Weather App</h1>
          <p>
            I built a weather app where you can type any city and check the
            current weather.
          </p>
          <p>Technologies Used: React, Axios</p>
          <a
            href={
              "https://github.com/Javier-Ortiz-97/weather-app/tree/master/src"
            }
            target="blank"
          >
            <p>Checkout the source code on GitHub</p>
          </a>
          <a href={"https://aesthetic-swan-ff9b6d.netlify.app"} target="blank">
            <p>View the website live here</p>
          </a>
        </div>
        <div>
          <img src={weatherapp} alt="" />
        </div>
      </div>

      <div className="project">
      <div className="column-spaced">
        <h1>Tic-Tac-Toe Game</h1>
        <p>
          This is a tic-tact-toe game where two players can play.
        </p>
        <p>Technologies Used: React</p>
        <a
          href={
            "https://github.com/Javier-Ortiz-97/tic-tac-toe/tree/main/src"
          }
          target="blank"
        >
          <p>Checkout the source code on GitHub</p>
        </a>
        <a href={"https://unrivaled-alpaca-b61388.netlify.app"} target="blank">
          <p>View the website live here</p>
        </a>
      </div>
      <div>
        <img src={tictactoe} alt="" />
      </div>
    </div>

      <div className="project">
        <div className="column-spaced">
          <h1>Calculator</h1>
          <p>I built a calculator that performs basic math equations.</p>
          <p>Technologies Used: React</p>
          <a
            href={"https://github.com/Javier-Ortiz-97/calculator/tree/main/src"}
            target="blank"
          >
            <p>Checkout the source code on GitHub</p>
          </a>
          <a href={"https://lively-custard-218fb5.netlify.app"} target="blank">
            <p>View the website live here</p>
          </a>
        </div>
        <div>
          <img src={calculator} alt="" />
        </div>
      </div>
      <div className="project">
        <div className="column-spaced">
          <h1>Random Quote Generator</h1>
          <p>I built this random quote generator</p>
          <p>Technologies Used: React, Axios</p>
          <a
            href={
              "https://github.com/Javier-Ortiz-97/quote-generator/tree/master/src"
            }
            target="blank"
          >
            <p>Checkout the source code on GitHub</p>
          </a>
          <a
            href={"https://magnificent-chebakia-a6ee7c.netlify.app/"}
            target="blank"
          >
            <p>View the website live here</p>
          </a>
        </div>
        <img src={quoteGenerator} alt="" />
      </div>
      <div className="project">
        <div className="column-spaced">
          <h1>Portfolio</h1>
          <p>I built this website you are currently viewing</p>
          <p>Technologies Used: React</p>
          <a
            href={"https://github.com/Javier-Ortiz-97/portfolio/tree/master/src"}
            target="blank"
          >
            <p>Checkout the source code on GitHub</p>
          </a>
          <a href={"https://javierortiz97.netlify.app"} target="blank">
            <p>View the website live here</p>
          </a>
        </div>
        <img src={portfolio} alt="" />
      </div>
    </div>
  );
};

export default Projects;
