/* eslint-disable no-plusplus */
/* eslint-disable no-underscore-dangle */
import { useEffect, useRef } from 'react';

// This file is used to handle one single tooltip in time.
// After clicking on trigger this hook will close any other open tooltip.

let tooltips = [];
let tooltipCount = 0;

export const useSingleOpenTooltip = (handleClick, closeTooltip) => {
  const _id = useRef(tooltipCount++);

  useEffect(() => {
    tooltips.push({
      id: _id.current,
      cb: closeTooltip
    });

    return () => {
      tooltips = tooltips.filter(({ id }) => id === _id.current);
      tooltipCount--;
    };
  }, []);

  return (e) => {
    handleClick(e);

    tooltips.forEach((tooltip) => {
      if (tooltip.id !== _id.current) {
        tooltip.cb();
      }
    });
  };
};
