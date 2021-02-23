import { useEffect } from 'react';

export const useEventListener = (event, cb, deps, target = window, capture = false) => {
  if (!target) {
    // eslint-disable-next-line no-param-reassign
    target = window;
  }
  useEffect(() => {
    const handleCallback = () => cb(...deps);

    target.addEventListener(event, handleCallback, capture);

    return () => {
      target.removeEventListener(event, handleCallback, capture);
    };
  }, deps);
};
