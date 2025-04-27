import {FaInfo} from "react-icons/fa";
import {FaPencil} from "react-icons/fa6";

function About() {
    return (
        <section className="about">
            <div className="about-container">
                <h2><FaInfo style={{ marginRight: '8px' }} /> About Me</h2>
                <p>Motivated Junior Developer with strong passion for web technologies. Always eager to learn, grow, and contribute to building modern applications.</p>
            </div>
        </section>

    );
}

export default About;
