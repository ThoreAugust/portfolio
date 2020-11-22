import React from 'react';
import experienceStyle from './experience.module.scss'

const Experience = () =>{
    return(
        <div className={experienceStyle.container}>
            <div className={experienceStyle.left}>
                <div>
                    <h2>Work</h2>
                    <ul>
                        <li>
                            <h3>Software Developer</h3>
                            <p>@<a href="https://www.wps.de/">Workplace Solution GmbH</a></p>
                        </li>
                        <li>
                            <h3>Salesman</h3>
                            <p>@<a href="https://www.aldi-nord.de/">Aldi GmbH & Co. KG</a></p>
                        </li>
                        <li>
                            <h3>Laboratory Assistant</h3>
                            <p>@<a href="https://bostel.de/">Analytisches Institut Bostel GmbH & Co. KG</a></p>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2>School</h2>
                    <ul>
                        <li>
                            <h3>Bachelors Degree - Media Systems</h3>
                            <p>@<a href="https://www.haw-hamburg.de/">HAW Hamburg</a><br/>
                                still in progress.
                            </p>
                        </li>
                        <li>
                            <h3>High School</h3>
                            <p>@<a href="https://www.fps-niebuell.de/">FPS Niebüll</a></p>
                        </li>
                        <li>
                            <h3>Primary School</h3>
                            <p>@<a href="http://fps-langenhorn.de">FPS Langenhorn</a></p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={experienceStyle.right}>
                <div>
                    <h2>Stack</h2>
                    <div className={experienceStyle.stack}>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" alt="HTML5" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" alt="CSS3" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="Javascript" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg" alt="Git" />
                        <img src="https://upload.wikimedia.org/wikipedia/de/e/e1/Java-Logo.svg" alt="Java" />
                        <img src="https://cdn.worldvectorlogo.com/logos/gwt.svg" alt="GWT" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React" />
                        <img src="https://ik.imagekit.io/surinderbhomra/Blog/JAM%20Stack/GatsbyJSIcon.png?tr=w-1000" alt="Gatsby" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" alt="Node.js" />
                    </div>
                </div>
                <div className={experienceStyle.hobbies}>
                    <h2>Hobbies</h2>
                    <ul>
                        <li>
                            <h3>Making Music (Drums and Guitar)</h3>
                        </li>
                        <li>
                            <h3>Anime</h3>
                        </li>
                        <li>
                            <h3>Gaming</h3>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Experience