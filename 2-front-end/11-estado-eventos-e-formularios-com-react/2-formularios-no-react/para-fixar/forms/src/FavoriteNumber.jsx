import React from 'react';
import PropTypes from 'prop-types';

class FavoriteNumber extends React.Component {
  render() {
    const { value, onChange } = this.props
    return (
      <label>
        Qual seu número favorito?
        <input
          type="number"
          name="favoriteNumber"
          value={value}
          onChange={onChange}
        />
      </label>
    );
  }
}

FavoriteNumber.propTypes = {
  value: PropTypes.number.isRequired,
};

export default FavoriteNumber;
