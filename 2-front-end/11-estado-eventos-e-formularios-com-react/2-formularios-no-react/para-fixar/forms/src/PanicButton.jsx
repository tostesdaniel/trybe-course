import React from 'react';

class PanicButton extends React.Component {
  render() {
    const { onChange } = this.props
    return (
      <label>
        Não toque neste botão
        {/* 4 - Acrescente no seu formulário um input do tipo checkbox e garanta que seu event handler esteja tratando este caso corretamente. */}
        <input
          type="checkbox"
          name="panicButton"
          onChange={onChange}
        />
      </label>
    );
  }
}

export default PanicButton;
