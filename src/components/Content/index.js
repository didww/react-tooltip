import React            from 'react';
import ReactDOM         from 'react-dom';
import PropTypes        from 'prop-types';
import { childrenProp } from '../../utils/PropTypes';
import './styles.scss';

export const Content = ({ children, setRef }) => {
  return ReactDOM.createPortal((
    <div
      className="react-tooltip__wrapper"
      ref={ setRef }
    >
      <div className="react-tooltip__content">
        {children}
      </div>
    </div>
  ), document.body);
};

Content.propTypes = {
  children: childrenProp,
  setRef: PropTypes.func.isRequired
};

Content.defaultProps = {
  children: null
};
