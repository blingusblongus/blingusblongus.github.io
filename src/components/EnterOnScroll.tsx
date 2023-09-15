import { useEffect, useRef, useState } from "react";

type EnterOnScrollProps = { text: string };
const EnterOnScroll = ({ text }: EnterOnScrollProps) => {
    const ref = useRef(null);

    // const [content, setContent] = useState("hello");
    const [intersecting, setIntersecting] = useState(false);

    useEffect(() => {
        const currentElement = ref.current;

        const observerCallback = (
            entries: IntersectionObserverEntry[],
            observer: IntersectionObserver
        ) => {
            if (entries.some((entry) => entry.isIntersecting)) {
                setIntersecting(true);
            } else {
                setIntersecting(false);
            }
        };

        const observerOptions = {
            root: null,
            rootMargin: "0px",
            threshold: 0.5,
        };
        const observer = new IntersectionObserver(
            observerCallback,
            observerOptions
        );
        if (currentElement) {
            observer.observe(currentElement);
        }

        return () => {
            if (currentElement) {
                observer.unobserve(currentElement);
            }
        };
    }, []);

    return (
        <div className="w-full overflow-hidden" ref={ref}>
            <div
                className={`m-auto w-full transition-all ease-in-out duration-1000  ${
                    intersecting
                        ? "translate-x-0 opacity-100"
                        : "translate-x-[50vw] opacity-0"
                }`}
            >
                <div className="text-center">{text}</div>
            </div>
        </div>
    );
};

export default EnterOnScroll;
