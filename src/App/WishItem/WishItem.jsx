import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const WishItem = ({done, text, id}) => (
  <li key={text} className={classNames('wish-list__item', { 'wish-list__item--done': done })}>
    <input id={id} type="checkbox" checked={done} />
    <label htmlFor={id}>
      {text}
    </label>
  </li>
);

WishItem.propTypes = {
  done: PropTypes.bool,
  text: PropTypes.string,
  id: PropTypes.string,
};
WishItem.defaultProps = {
  done: false,
  text: '',
  id: '',
};

export default WishItem;
