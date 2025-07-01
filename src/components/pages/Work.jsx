import projectImage1 from "../../assets/reciplacepage.png";
import projectImage2 from "../../assets/requestdjpage.png";
import projectImage3 from "../../assets/readme.png";
import projectImage4 from "../../assets/blogspacepage.png";
import projectImage5 from "../../assets/weatherdashboardpage.png";
import projectImage6 from "../../assets/taskboardpage.png";
import projectImage7 from "../../assets/jatepage.png";
import projectImage8 from "../../assets/etgcapage.png";
import githubIcon from "../../assets/GitHub.svg";
import './work.css';

function Work() {
    return (
        <div className="work">
            <div className="work-header">
                <span>
                    <h2>Projects</h2>
                </span>
            </div>
            <div className="projects">
                <div className="single">
                    <div className="single-img">
                        <img src={projectImage8} alt="Elements the Game Companion App" />
                    </div>
                    <div className="single-detail">
                        <h4>Elements the Game Companion App</h4>
                        <p>A full companion app to allow any player to experience the flash game Elements as a physical tabletop card game.</p>
                        <div className="button-wrap">
                            <a href="https://github.com/CinosMagician/Elements-Companion-App" target="_blank" rel="noopener noreferrer">
                                <button className="glow-on-hover" type="button">GitHub <img className="smallicon" src={githubIcon} alt="GitHub icon" /></button>
                            </a>
                            <a href="https://elements-companion-app.onrender.com/" target="_blank" rel="noopener noreferrer">
                                <button className="glow-on-hover" type="button">Visit Live Page</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="single reverse">
                    <div className="single-img">
                        <img src={projectImage2} alt="Request.DJ v2" />
                    </div>
                    <div className="single-detail">
                        <h4>Request.DJ v2</h4>
                        <p>Requests DJ Version 2 is a platform that allows DJs and event organizers to create interactive playlists for their events.</p>
                        <div className="button-wrap">
                            <a href="https://github.com/roughnut/requests-dj-v2" target="_blank" rel="noopener noreferrer">
                                <button className="glow-on-hover" type="button">GitHub <img className="smallicon" src={githubIcon} alt="GitHub icon" /></button>
                            </a>
                            <a href="https://requests.dj/" target="_blank" rel="noopener noreferrer">
                                <button className="glow-on-hover" type="button">Visit Live Page</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="single">
                    <div className="single-img">
                        <img src={projectImage1} alt="ReciPlace" />
                    </div>
                    <div className="single-detail">
                        <h4>ReciPlace</h4>
                        <p>ReciPlace is a combination of recipe searching and nearby places to eat. Search up recipies by ingredients, or look at local restaurants to eat out at.</p>
                        <div className="button-wrap">
                            <a href="https://github.com/CinosMagician/group-2-recipe-project" target="_blank" rel="noopener noreferrer">
                                <button className="glow-on-hover" type="button">GitHub <img className="smallicon" src={githubIcon} alt="GitHub icon" /></button>
                            </a>
                            <a href="https://cinosmagician.github.io/group-2-recipe-project/" target="_blank" rel="noopener noreferrer">
                                <button className="glow-on-hover" type="button">Visit Live Page</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="single reverse">
                    <div className="single-img">
                        <img src={projectImage4} alt="BlogSpace" />
                    </div>
                    <div className="single-detail">
                        <h4>BlogSpace</h4>
                        <p>An example social media blog site, users can create posts and leave reactions on other posts. Management systems to update and delete posts and reactions too.</p>
                        <div className="button-wrap">
                            <a href="https://github.com/CinosMagician/BlogSpace" target="_blank" rel="noopener noreferrer">
                                <button className="glow-on-hover" type="button">GitHub <img className="smallicon" src={githubIcon} alt="GitHub icon" /></button>
                            </a>
                            <a href="https://blog-db-rofh.onrender.com/" target="_blank" rel="noopener noreferrer">
                                <button className="glow-on-hover" type="button">Visit Live Page</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="single">
                    <div className="single-img">
                        <img src={projectImage5} alt="Weather Dashboard" />
                    </div>
                    <div className="single-detail">
                        <h4>Weather Dashboard</h4>
                        <p>Track local and global weather conditions with a real-time weather dashboard application.</p>
                        <div className="button-wrap">
                            <a href="https://github.com/CinosMagician/weather-dashboard" target="_blank" rel="noopener noreferrer">
                                <button className="glow-on-hover" type="button">GitHub <img className="smallicon" src={githubIcon} alt="GitHub icon" /></button>
                            </a>
                            <a href="https://cinosmagician.github.io/weather-dashboard/" target="_blank" rel="noopener noreferrer">
                                <button className="glow-on-hover" type="button">Visit Live Page</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="single reverse">
                    <div className="single-img">
                        <img src={projectImage6} alt="Task Board" />
                    </div>
                    <div className="single-detail">
                        <h4>Task Board</h4>
                        <p>A Kanban-style task management board to help teams manage their tasks and workflows efficiently.</p>
                        <div className="button-wrap">
                            <a href="https://github.com/CinosMagician/taskboard" target="_blank" rel="noopener noreferrer">
                                <button className="glow-on-hover" type="button">GitHub <img className="smallicon" src={githubIcon} alt="GitHub icon" /></button>
                            </a>
                            <a href="https://cinosmagician.github.io/taskboard/" target="_blank" rel="noopener noreferrer">
                                <button className="glow-on-hover" type="button">Visit Live Page</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="single">
                    <div className="single-img">
                        <img src={projectImage7} alt="J.A.T.E - Just Another Text Editor" />
                    </div>
                    <div className="single-detail">
                        <h4>J.A.T.E - Just Another Text Editor</h4>
                        <p>A text editor PWA (Progressive Web App) that can be used both online and offline with data persistence.</p>
                        <div className="button-wrap">
                            <a href="https://github.com/CinosMagician/Codexium-PWA-Text-Editor" target="_blank" rel="noopener noreferrer">
                                <button className="glow-on-hover" type="button">GitHub <img className="smallicon" src={githubIcon} alt="GitHub icon" /></button>
                            </a>
                            <a href="https://codexium-pwa-text-editor.onrender.com/" target="_blank" rel="noopener noreferrer">
                                <button className="glow-on-hover" type="button">Visit Live Page</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Work;