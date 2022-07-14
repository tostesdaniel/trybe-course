import React from 'react';

class AboutYou extends React.Component {
  render() {
    const { value, onChange } = this.props
    return (
      <label>
        Diga algo sobre você
        <textarea
          name="aboutYou"
          cols="50"
          rows="1"
          onChange={onChange}
          value={value}
        >

        </textarea>
      </label> 
    );
  }
}

export default AboutYou;
