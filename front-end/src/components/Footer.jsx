export function Footer() {
    return (
        <footer className="py-6 text-center text-gray-400 text-sm">
            <div className="w-100 h-1 bg-gray-500 mx-auto mb-8 rounded-full" />

            &copy; {new Date().getFullYear()} Stoyan Kanev. All rights reserved.
        </footer>
    );
}
