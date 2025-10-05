export function Footer() {
    const container = "container mx-auto max-w-6xl px-4";

    return (
        <footer className="relative mt-12 border-t border-white/10 py-10 text-center text-sm text-gray-400">
            <div className="absolute inset-x-0 -top-6 mx-auto h-px max-w-6xl bg-gradient-to-r from-transparent via-white/15 to-transparent" />
            <div className={container}>
                &copy; {new Date().getFullYear()} <span className="text-gray-300">Stoyan Kanev</span>. All rights reserved.
            </div>
        </footer>
    );
}
