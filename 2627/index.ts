type F = (...args: number[]) => void

function debounce(fn: F, t: number): F {
    let timeoutId: NodeJS.Timeout | undefined;
    let savedArgs: number[] | undefined;

    return function(...args) {
        savedArgs = args;

        if (timeoutId !== undefined) {
            clearTimeout(timeoutId);
        }

        timeoutId = setTimeout(() => {
            fn(...savedArgs);
        }, t);
    }
};

/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */