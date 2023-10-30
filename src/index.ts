import { useEffect, useRef } from 'react';

/**
 * Sets an interval (running a task repeatedly)
 *
 * @param callback The function to run on the interval. It is recommended to use the {@link React.useCallback|useCallback} hook around this argument to prevent changing the function frequently.
 * @param timeout The time between executions.
 * @param runOnInit Whether or not `callback` should be run on initialization. If false, it will not run until after the first delay. True by default.
 */
function useInterval(callback: () => void, timeout: number, runOnInit = true) {
    const callbackRef = useRef(callback);
    callbackRef.current = callback;

    useEffect(() => {
        if (runOnInit) callbackRef.current();
        const id = setInterval(callbackRef.current, timeout);
        return () => clearInterval(id);
    }, [runOnInit, timeout]);
}

export { useInterval };
