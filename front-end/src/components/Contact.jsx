import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export function Contact() {
    return (
        <section id="contact" className="py-20 bg-black text-white text-center px-4">
            <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
            <p className="text-gray-400 mb-6">Feel free to reach out for collaborations or just a friendly hello!</p>
            <div className="flex flex-col space-y-4 items-center">
                <div className="flex items-center gap-3 text-lg">
                    <FaLinkedin className="text-blue-500" />
                    <a href="https://www.linkedin.com/in/stoyan-kanev-042386207" target="_blank" rel="noopener noreferrer">
                        Stoyan Kanev
                    </a>
                </div>
                <div className="flex items-center gap-3 text-lg">
                    <FaGithub className="text-white" />
                    <a href="https://github.com/LazyPotato02" target="_blank" rel="noopener noreferrer">
                        LazyPotato02
                    </a>
                </div>
                <div className="flex items-center gap-3 text-lg">
                    <FaEnvelope className="text-red-400" />
                    <a href="mailto:stoyan.kanev178@gmail.com">stoyan.kanev178@gmail.com</a>
                </div>
            </div>

        </section>
    );
}