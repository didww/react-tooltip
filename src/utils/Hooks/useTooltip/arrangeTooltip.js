/* eslint-disable no-param-reassign */
const OFFSET = 22;

function positionContentTop(content, triggerRect) {
  content.style.bottom = `${window.innerHeight - triggerRect.top}px`;
}

const ARROW_HEIGHT = 6;
function positionContentBottom(content, contentRect, triggerRect) {
  content.style.bottom = `${window.innerHeight - triggerRect.bottom - contentRect.height - ARROW_HEIGHT}px`;
}

function positionContentLeft(content, contentRect, triggerRect, triggerCenter) {
  const right = window.innerWidth - triggerCenter;

  if (triggerRect.left < contentRect.width - OFFSET) {
    content.style.right = 'auto';
    content.style.left = 'auto';
  } else {
    content.style.right = `${right - OFFSET}px`;
  }
}

function positionContentRight(content, contentRect, triggerRect, triggerCenter) {
  if ((window.innerWidth - triggerRect.right) < contentRect.width - OFFSET) {
    content.style.right = 'auto';
    content.style.left = 'auto';
  } else {
    content.style.left = `${triggerCenter - OFFSET}px`;
  }
}

function positionArrowTop(arrow, arrowRect, triggerRect) {
  arrow.style.top = `${triggerRect.top - arrowRect.height}px`;

  const [arrowChild] = arrow.children;
  arrowChild.style.transform = 'rotate(0deg)';
}

function positionArrowBottom(arrow, triggerRect) {
  arrow.style.top = `${triggerRect.bottom + ARROW_HEIGHT}px`;

  const [arrowChild] = arrow.children;
  arrowChild.style.transform = 'rotate(180deg)';
}

function positionArrowLeft(arrow, arrowRect, triggerCenter) {
  arrow.style.left = `${triggerCenter - (arrowRect.width / 2)}px`;
}

function positionArrowRight(arrow, arrowRect, triggerCenter) {
  arrow.style.left = `${triggerCenter - (arrowRect.width / 2)}px`;
}

function getHorizontalDirection(placement, isFitLeft, isFitRight) {
  if (placement.includes('right')) {
    return isFitRight ? 'right' : 'left';
  }

  if (placement.includes('left')) {
    return isFitLeft ? 'left' : 'right';
  }
}

function getVerticalDirection(placement, isFitTop, isFitBottom) {
  if (placement.includes('top')) {
    return isFitTop ? 'top' : 'bottom';
  }

  if (placement.includes('bottom')) {
    return isFitBottom ? 'bottom' : 'top';
  }
}

export function arrangeTooltip(content, trigger, arrow, placement, maxWidth) {
  const contentRect = content.getBoundingClientRect();
  const triggerRect = trigger.getBoundingClientRect();
  const arrowRect = arrow.getBoundingClientRect();

  const isFitTop = contentRect.height < triggerRect.top;
  const isFitBottom = contentRect.height < (window.innerHeight - triggerRect.bottom);
  const isFitRight = (window.innerWidth - triggerRect.right) > contentRect.width - OFFSET;
  const isFitLeft = triggerRect.left > contentRect.width - OFFSET;

  const triggerCenter = triggerRect.left + (triggerRect.width / 2);

  const horDirection = getHorizontalDirection(placement, isFitLeft, isFitRight);

  // Positioning horizontaly
  if (horDirection === 'left') {
    positionContentLeft(content, contentRect, triggerRect, triggerCenter, maxWidth);
    positionArrowLeft(arrow, arrowRect, triggerCenter);
  } else if (horDirection === 'right') {
    positionArrowRight(arrow, arrowRect, triggerCenter);
    positionContentRight(content, contentRect, triggerRect, triggerCenter);
  }

  const verDirection = getVerticalDirection(placement, isFitTop, isFitBottom);

  // Positioning verticaly
  if (verDirection === 'top') {
    positionContentTop(content, triggerRect);
    positionArrowTop(arrow, arrowRect, triggerRect);
  } else if (verDirection === 'bottom') {
    positionContentBottom(content, contentRect, triggerRect);
    positionArrowBottom(arrow, triggerRect);
  }
}
