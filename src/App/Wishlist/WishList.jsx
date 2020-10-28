import React from 'react';
import PropTypes from 'prop-types';
import WishItem from '../WishItem';

const WishList = ({ wishes }) => (
  <ul className="wish-list">
    {wishes.map(({ text, done }, i) => (
      <WishItem
        text={text}
        done={done}
        id={`wish${i}`}
      />
    ))}
  </ul>
);

WishList.propTypes = {
  wishes: PropTypes.arrayOf(
    PropTypes.shape(WishItem.propTypes),
  ),
};

WishList.defaultProps = {
  wishes: [],
};

export default WishList;
