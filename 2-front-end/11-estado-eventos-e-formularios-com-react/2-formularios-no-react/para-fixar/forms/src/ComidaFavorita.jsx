import React from 'react';
import PropTypes from 'prop-types';

class ComidaFavorita extends React.Component {
  render() {
    const { value, onChange } = this.props
    return (
      <label>
        Qual dentre essas comidas é sua predileta?
        <select
          name="comidaFavorita"
          onChange={onChange}
          value={value}
        >
          <option value=""></option>
          <option value="frutosDoMar">Frutos do Mar</option>
          <option value="massas">Massas</option>
          <option value="paes-e-bolos">Pães e Bolos</option>
        </select>
      </label>
    );
  }
}

ComidaFavorita.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};

export default ComidaFavorita;
