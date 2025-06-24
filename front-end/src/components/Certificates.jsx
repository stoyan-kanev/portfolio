export function Certificates() {
    return (
        <section id="certificates" className="py-20 bg-gray-900 text-white px-4">
            <h2 className="text-4xl font-bold text-center mb-10">Certificates</h2>
            <div className="flex flex-wrap justify-center items-center gap-6 max-w-6xl mx-auto">
                <a href="https://softuni.bg/certificates/details/225828/6173141e" target="_blank" rel="noopener noreferrer">
                    <img src="/js.png" alt="JS Diploma" className="w-64 h-auto rounded shadow-lg hover:scale-105 transition" />
                </a>
                <a href="https://softuni.bg/certificates/details/171643/4f930d85" target="_blank" rel="noopener noreferrer">
                    <img src="/python.png" alt="Python Diploma" className="w-64 h-auto rounded shadow-lg hover:scale-105 transition" />
                </a>
                <a href="https://softuni.bg/certificates/details/185444/4677035a" target="_blank" rel="noopener noreferrer">
                    <img src="/python_full_stack.png" alt="Python Full Stack Diploma" className="w-64 h-auto rounded shadow-lg hover:scale-105 transition" />
                </a>
            </div>
        </section>
    );
}
