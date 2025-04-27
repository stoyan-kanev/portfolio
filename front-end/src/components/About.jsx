import {FaCode, FaTools, FaDatabase} from 'react-icons/fa';
import {SiPython, SiJavascript, SiTypescript, SiDjango, SiAngular, SiReact, SiLinux, SiMysql} from 'react-icons/si';

function About() {
    return (
        <section id="about" className="about">
            <h2>About Me</h2>
            <div className="about-table">
                <div className="about-row">
                    <span className="about-label">
                        <FaCode style={{marginRight: '8px'}}/>
                        Languages:
                    </span>
                    <span className="about-value">
                        <SiPython style={{marginRight: '5px', color: '#306998'}}/>
                        Python,
                        <SiJavascript style={{margin: '0 5px', color: '#f7df1e'}}/>
                        JavaScript,
                        <SiTypescript style={{margin: '0 5px', color: '#007acc'}}/>
                        TypeScript
                    </span>
                </div>

                <div className="about-row">
                    <span className="about-label">
                        <FaTools style={{marginRight: '8px'}}/>
                        Frameworks:
                    </span>
                    <span className="about-value">
                        <SiAngular style={{marginRight: '5px', color: '#bf1818'}}/>
                        Angular,
                        <SiDjango style={{margin: '0 5px', color: '#16962f'}}/>
                        Django,
                        <SiReact style={{margin: '0 5px', color: '#007acc'}}/>
                        React
                    </span>
                </div>

                <div className="about-row">
                    <span className="about-label">
                        <FaDatabase style={{marginRight: '8px'}}/>
                        Other Skills:
                    </span>
                    <span className="about-value">
                        <SiLinux style={{marginRight: '5px', color: '#000000'}}/>
                        Linux System Administration,
                        <FaTools style={{margin: '0 5px', color: '#16962f'}}/>
                        CI/CD,
                        <SiMysql style={{margin: '0 5px', color: '#007acc'}}/>
                        MySQL
                    </span>
                </div>
            </div>
        </section>
    );
}

export default About;
