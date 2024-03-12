import { useEffect, useRef, useState } from "react";

export function useTypingEffect(
    texttotype,
    interkey_duration
) {
    const [currentPosition, setCurrentPosition] = useState(0);
    const currentPositionRef = useRef(0);
    useEffect(() => {
        const intervalId = setInterval(() => {
            console.log("internvl");
            setCurrentPosition((value) => value + 1);
            currentPositionRef.current += 1;
            if (currentPositionRef.current > texttotype.length) {
                clearInterval(intervalId);
            }
        }, interkey_duration);
        return () => {
            clearInterval(intervalId);
            currentPositionRef.current=0;
            setCurrentPosition(0);
        }
    }, [interkey_duration,texttotype]);
    return texttotype.substring(0, currentPosition);
}