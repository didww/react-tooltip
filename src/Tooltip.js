import React, { useState } from 'react';
import PropTypes           from 'prop-types';
import { Content }         from './components/Content';
import { Arrow }           from './components/Arrow';
import { childrenProp }    from './utils/PropTypes';
import { useTooltip }      from './utils/Hooks/useTooltip';
import './animations.css';

const Tooltip = ({
  children,
  placement,
  maxWidth,
  title,
  className
}) => {
  const [triggerRef, setTrigger] = useState(null);
  const [contentRef, setContent] = useState(null);
  const [arrowRef, setArrow] = useState(null);

  const [handlers] = useTooltip({
    elements: {
      trigger: triggerRef,
      content: contentRef,
      arrow: arrowRef
    },
    placement,
    maxWidth
  });

  return (
    <div
      { ...handlers }
      className={ className }
      ref={ setTrigger }
    >
      {title}
      <Content
        setRef={ setContent }
      >
        {children}
      </Content>
      <Arrow setRef={ setArrow } />
    </div>
  );
};

Tooltip.propTypes = {
  children: childrenProp,
  placement: PropTypes.oneOf([
    'top-left',
    'top-right',
    'bottom-left',
    'bottom-right'
  ]),
  maxWidth: PropTypes.number,
  title: PropTypes.node.isRequired,
  className: PropTypes.string
};

Tooltip.defaultProps = {
  placement: 'top-right',
  maxWidth: 198,
  className: '',
  children: null
};

export default React.memo(Tooltip);
