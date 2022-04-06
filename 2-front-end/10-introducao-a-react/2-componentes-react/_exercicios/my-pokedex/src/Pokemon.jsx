import React from 'react';
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
  render() {
    const { pokemon: { name, type, averageWeight: { value, measurementUnit }, image } } = this.props;
    return (
      <section className="pokemon">
        <li>
           <p>{ name }</p>
          <p>{ type }</p>
          <p>{ `averageWeight: ${value} ${measurementUnit}` }</p>
        </li>
          <img src={image} alt="pokemon" />
      </section>
    );
  }
}

Pokemon.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  measurementUnit: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
}

export default Pokemon;
