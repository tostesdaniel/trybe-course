import React from 'react';

class FavoriteMeme extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label>
        {/* 5 - Busque na documentação de React acerca de formulários (primeiro link da seção de Recursos Adicionais!) como se deve adicionar um input para arquivos . Acrescente um ao seu formulário. */}
        Nos mostre seu meme favorito
        <input
          type="file"
          name="favoriteMeme"
          value={value}
          onChange={onChange}
        />
      </label>
    );
  }
}

export default FavoriteMeme;
