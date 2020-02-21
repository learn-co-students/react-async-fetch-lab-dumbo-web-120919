import React from 'react';

export default class App extends React.Component {

  state = {
    peopleInSpace: []
  }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
    .then( r => r.json() )
    .then( people => {
      this.setState({
        peopleInSpace: people.people
      })
    })
  }

  render() {
    return(
      <div>
        {this.state.peopleInSpace.map((person, id) => <h1 key={id}>{person.name}</h1>)}
      </div>
    )
  }

}