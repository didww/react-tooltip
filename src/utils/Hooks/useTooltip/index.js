/* eslint-disable no-param-reassign */
import {
  useEffect,
  useState,
  useMemo
}                               from 'react';
import { arrangeTooltip }       from './arrangeTooltip';
import useMobile                from '../useMobile';
import { useEventListener }     from '../useEventListener';
import { useSingleOpenTooltip } from '../useSingleOpenTooltip';

function makeVisible(content) {
  content.style.opacity = '1';
  content.style.pointerEvents = 'auto';
}

function makeHidden(content) {
  content.style.opacity = '0';
  content.style.pointerEvents = 'none';
}

function animateFadeInUp(element) {
  element.classList.add('fadeInUp');
}

function animateFadeOutDown(element) {
  element.classList.remove('fadeInUp');
}

export const useTooltip = ({
  elements: {
    trigger,
    content,
    arrow
  },
  placement,
  maxWidth
}) => {
  const isMobile = useMobile();
  const [isVisible, setIsVisible] = useState(false);

  function handleClick(e) {
    // need to stop event propagation to NOT give useEventListener('click') close tooltip
    e.stopPropagation();
    setIsVisible(true);
  }

  function show() {
    setIsVisible(true);
  }

  function hide() {
    setIsVisible(false);
  }

  const handleSingleClick = useSingleOpenTooltip(handleClick, hide);

  useEffect(() => {
    if (!content) return;

    content.style.maxWidth = `${maxWidth}px`;

    if (isVisible) {
      makeVisible(content);
      makeVisible(arrow);
      animateFadeInUp(content);
      animateFadeInUp(arrow);
      arrangeTooltip(content, trigger, arrow, placement);
    } else {
      animateFadeOutDown(content);
      animateFadeOutDown(arrow);
      makeHidden(content);
      makeHidden(arrow);
    }
  }, [content, arrow, isVisible, placement, maxWidth]);

  // event listeners
  const dialog = useMemo(() => document.querySelector('main'), []);
  useEventListener('scroll', hide, [content, trigger, arrow, placement], dialog, true);
  useEventListener('resize', arrangeTooltip, [content, trigger, arrow, placement, maxWidth]);
  useEventListener('click', hide, []);

  const handlers = isMobile ? {
    onClick: handleSingleClick,
    onKeyPress: handleSingleClick
  } : {
    onMouseEnter: show,
    onMouseLeave: hide
  };

  return [handlers];
};
