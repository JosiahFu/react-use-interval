import { useEffect, useRef } from 'react';

/**
 * Sets an interval (running a task repeatedly)
 *
 * @param callback The function to run on the interval. It is recommended to use the {@link React.useCallback|useCallback} hook around this argument to prevent changing the function frequently.
 * @param timeout The time between executions.
 * @param runOnInit Whether or not `callback` should be run on initialization. If false, it will not run until after the first delay. True by default.
 * @param resetTimerOnChange Whether changing the callback should reset the timer. If `runOnInit` is true and this is true, this will call the function immediately when it changes.
 */
function useInterval(callback: () => void, timeout: number, runOnInit = true, resetTimerOnChange = false) {
    const callbackRef = useRef(callback);

    const currentCallback = resetTimerOnChange ? callback : callbackRef.current;

    useEffect(() => {
        callbackRef.current = callback;
    }, [callback]);

    useEffect(() => {
        if (runOnInit) currentCallback();
        const id = setInterval(currentCallback, timeout);
        return () => clearInterval(id);
    }, [currentCallback, runOnInit, timeout]);
}

export { useInterval };
