import logo from "./images/imgtwo.png";
import calculator from "./images/calculator.png";
import portfolio from "./images/portfolio.png";
import quoteGenerator from "./images/quotegenerator.png";

const Projects = () => {
  return (
    <div className="projects">
      <div className="project">
        <div className="column-spaced">
          <h1>Pizzeria Marinara</h1>
          <p>I built an online menu for a friend's catering business.</p>
          <a href={"https://github.com/Javier-Ortiz-97/pizzeria-marinara/tree/master"} target="blank">
            <p>Checkout the source code on GitHub</p>
          </a>
          <a href={"https://www.pizzeriamarinarasd.com/"} target="blank">
            <p>View the website live here</p>
          </a>
        </div>
        <div>
          <img src={logo} alt=""/>
        </div>
      </div>
      <div className="project">
        <div className="column-spaced">
          <h1>Calculator</h1>
          <p>I built this calculator that performs basic math equations.</p>
          <a href={"https://github.com/Javier-Ortiz-97/calculator"} target="blank">
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
        <p>I built this random quote generator using React and Axios</p>
        <a href={"https://github.com/Javier-Ortiz-97/quote-generator/tree/master"} target="blank">
          <p>Click here to checkout the source code on GitHub</p>
        </a>
        <a href={"https://magnificent-chebakia-a6ee7c.netlify.app/"} target="blank">
          <p>Click here to view the website live</p>
        </a>
      </div>
      <img src={quoteGenerator} alt="" />
    </div>
      <div className="project">
        <div className="column-spaced">
          <h1>Portfolio</h1>
          <p>I built this website you are currently viewing</p>
          <a href={"https://github.com/Javier-Ortiz-97/portfolio"} target="blank">
            <p>Click here to checkout the source code on GitHub</p>
          </a>
          <a href={"https://javierortiz97.netlify.app"} target="blank">
            <p>Click here to view the website live</p>
          </a>
        </div>
        <img src={portfolio} alt="" />
      </div>
    </div>
  );
};

export default Projects;
