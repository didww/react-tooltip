import { useEffect, useState } from 'react';
import bowser                  from 'bowser';

export default function useMobile() {
  const mq = window.matchMedia('(max-width: 820px)');
  const isTouchableDevice = bowser.tablet || bowser.mobile;

  const { matches } = mq;

  const [value, setValue] = useState(isTouchableDevice || matches);

  const handler = () => {
    setValue(mq.matches);
  };

  useEffect(() => {
    mq.addListener(handler);

    return () => mq.removeListener(handler);
  }, []);

  return value;
}
