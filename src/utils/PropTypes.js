import PropTypes from 'prop-types';

export const childrenProp = PropTypes.oneOfType([
  PropTypes.arrayOf(PropTypes.node),
  PropTypes.node
]);
