import { useState, useEffect } from 'react';

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    const currentBP = width <= 640 ? 1 : width <= 768 ? 2 :  width <= 1024 ? 3 :  width <= 1280 ? 4 :  width <= 1536 ? 5 : 6;
    return {
        width,
        height,
        currentBP
    };
}

export default function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
}
