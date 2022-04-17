import React from 'react'
import Loading from './components/Loading'
import PersonCard from './components/PersonCard';

class App extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       loading: true,
       person: [],
    }
  }

  async componentDidMount() {
    const url = 'https://api.randomuser.me/';
    const response = await fetch(url);
    const data = await response.json();
    console.log('data', data);
    console.log('results', data.results);
    this.setState({
      person: data.results,
      loading: false,
    });
  }

  shouldComponentUpdate(_nextProps, nextState) {
    console.log('nextState', nextState);
    const age = 50;
    if (nextState.person[0].dob.age > age) {
      return false;
    }
    return true;
  }

  getUserElements = (user) => {
    return {
      name: `${user.name.first} ${user.name.last}`,
      email: user.email,
      age: user.dob.age,
      image: user.picture.thumbnail,
    }
  } 

  render() {
    const { person, loading } = this.state
    if (loading) return <Loading />
    return(
      <div>
        {person.map((person, index) => (
          <PersonCard
            key={ index }
            person={ this.getUserElements(person) }
          />
        ))}
      </div>
    )
  }
}

export default App;
