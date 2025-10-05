import {useEffect, useRef, useState} from "react";

export function Reveal({ children, delay = 0, className = "" }) {
    const ref = useRef(null);
    const [shown, setShown] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el || typeof IntersectionObserver === "undefined") {
            // Fallback: show immediately (e.g., older browsers or SSR edge cases)
            setShown(true);
            return;
        }
        const obs = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setShown(true);
                    obs.unobserve(entry.target);
                }
            },
            { threshold: 0.12 }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            style={{ transitionDelay: `${delay}ms` }}
            className={[
                "transform transition duration-700 will-change-transform",
                shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
                className
            ].join(" ")}
        >
            {children}
        </div>
    );
}