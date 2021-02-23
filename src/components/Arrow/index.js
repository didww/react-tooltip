import React     from 'react';
import ReactDOM  from 'react-dom';
import './styles.scss';

export const Arrow = ({ setRef }) => {
  return ReactDOM.createPortal((
    <div ref={ setRef } className='react-tooltip__arrow__wrapper'>
      <div className="react-tooltip__arrow" />
      {/*
        ATTENTION: Arrow component should contain 2 divs
        because nested div recevies transform: rotate to be correctly displayed in any direction.
        Parent div recevies transform: translateY to be animated with fadeIn/fadeOut
      */}
    </div>
  ), document.body);
};
