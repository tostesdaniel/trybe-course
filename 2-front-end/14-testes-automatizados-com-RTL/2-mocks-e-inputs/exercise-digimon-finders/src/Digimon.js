import React from 'react';
import PropTypes from 'prop-types';

function Digimon({ digimon, error }) {
  if (error) {
    return (<section>{error}</section>);
  }

  return (
    <section>
      <h2>{digimon.name}</h2>
      <p>{`level: ${digimon.level}`}</p>
      <img src={ digimon.img } alt={ digimon.name } />
    </section>
  );
}

Digimon.propTypes = {
  digimon: PropTypes.shape({
    name: PropTypes.string,
    level: PropTypes.string,
    img: PropTypes.string,
  }),
  error: PropTypes.string,
};

Digimon.defaultProps = {
  error: null,
  digimon: null,
};

export default Digimon;
