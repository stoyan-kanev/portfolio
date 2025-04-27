import { FaGraduationCap } from 'react-icons/fa';

function Certificates() {
    return (
        <section id="certificates" className="certificates">
            <h2><FaGraduationCap style={{ marginRight: '8px' }} /> Diplomas</h2>
            <div className="certificate-gallery">
                <div className="certificate-item">
                    <img src="/js.png" alt="Js Diploma" />
                </div>
                <div className="certificate-item">
                    <img src="/python.png" alt="Python Diploma" />
                </div>
                <div className="certificate-item">
                    <img src="/python_full_stack.png" alt="Python Full Stack Diploma" />
                </div>
            </div>
        </section>
    );
}

export default Certificates;
