import { useEffect } from 'react';

/**
 * This copied almost verbatim from the React docs: https://react.dev/reference/react/useEffect#examples-custom-hooks
 */
export function useWindowListener(eventType, listener) {
    useEffect(() => {
        window.addEventListener(eventType, listener);
        return () => {
            window.removeEventListener(eventType, listener);
        };
    }, [eventType, listener]);
}
