// create your App component here
import React from 'react'

export default class App extends React.Component {

    state = {
        astronauts: []
    }

    componentDidMount(){
        fetch('http://api.open-notify.org/astros.json')
      .then(response => response.json())
      .then((astronauts) => this.setState({ astronauts: astronauts }))
    }

    render(){
        return(<h1>hello</h1>)
    }

}