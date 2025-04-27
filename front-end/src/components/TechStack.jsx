import {FaCode, FaTools, FaDatabase, FaWrench} from 'react-icons/fa';
import {SiPython, SiJavascript, SiTypescript, SiDjango, SiAngular, SiReact, SiLinux, SiMysql} from 'react-icons/si';

function TechStack() {
    return (
        <section id="techstack" className="techstack">
            <h2><FaWrench style={{ marginRight: '8px' }} />Tech Stack</h2>
            <div className="techstack-table">
                <div className="techstack-row">
                    <span className="techstack-label">
                        <FaCode style={{marginRight: '8px'}}/>
                        Languages:
                    </span>
                    <span className="techstack-value">
                        <SiPython style={{marginRight: '5px', color: '#306998'}}/>
                        Python,
                        <SiJavascript style={{margin: '0 5px', color: '#f7df1e'}}/>
                        JavaScript,
                        <SiTypescript style={{margin: '0 5px', color: '#007acc'}}/>
                        TypeScript
                    </span>
                </div>

                <div className="techstack-row">
                    <span className="techstack-label">
                        <FaTools style={{marginRight: '8px'}}/>
                        Frameworks:
                    </span>
                    <span className="techstack-value">
                        <SiAngular style={{marginRight: '5px', color: '#bf1818'}}/>
                        Angular,
                        <SiDjango style={{margin: '0 5px', color: '#16962f'}}/>
                        Django,
                        <SiReact style={{margin: '0 5px', color: '#007acc'}}/>
                        React
                    </span>
                </div>

                <div className="techstack-row">
                    <span className="techstack-label">
                        <FaDatabase style={{marginRight: '8px'}}/>
                        Other Skills:
                    </span>
                    <span className="techstack-value">
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

export default TechStack;
