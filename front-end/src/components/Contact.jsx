import {FaEnvelope, FaGithub, FaLinkedin} from 'react-icons/fa';

function Contact() {
    return (
        <section id="contact" className="contact">
            <h2>Contact</h2>
            <div className="contact-items">

                <div className="contact-item">
                    <FaLinkedin className="contact-icon"/>
                    <a href="https://www.linkedin.com/in/stoyan-kanev-042386207" target="_blank"
                       rel="noopener noreferrer">
                        Stoyan Kanev
                    </a>
                </div>
                <div className="contact-item">
                    <FaGithub className="contact-icon"/>
                    <a href="https://github.com/LazyPotato02" target="_blank" rel="noopener noreferrer">
                        Stoyan Kanev
                    </a>
                </div>
                <div className="contact-item">
                    <FaEnvelope className="contact-icon"/>
                    <a href="mailto:stoyan.kanev178@gmail.com">stoyan.kanev178@gmail.com</a>
                </div>
            </div>
        </section>
    );
}

export default Contact;
