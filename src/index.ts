import { useEffect, useRef } from 'react';

function useInterval(callback: () => void, timeout: number, resetTimerOnChange = false) {
    const callbackRef = useRef(callback);

    const currentCallback = resetTimerOnChange ? callback : callbackRef.current;

    useEffect(() => {
        callbackRef.current = callback;
    }, [callback]);

    useEffect(() => {
        const id = setInterval(currentCallback, timeout);
        return () => clearInterval(id);
    }, [currentCallback, timeout]);
}

export { useInterval };
