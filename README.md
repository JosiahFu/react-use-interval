# `react-use-interval`

React hook to statefully set an interval. Will update when the function updates and has proper cleanup.

## Example Usage

```ts
useInterval(
    // Highly reccommend to use a useCallback hook so that the interval isn't
    // changed every single render
    useCallback(() => {
        console.log('Interval');
        // ...
    }, []),
    1000
);
```

```ts
const [message, setMessage] = useState('Test');

useInterval(
    useCallback(() => {
        console.log(message);
    }, [message]),
    60000,
    // Determines if the function should run on initialization, otherwise it
    // will not run until the first interval
    false
);
```
