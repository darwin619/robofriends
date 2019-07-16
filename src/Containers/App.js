import React, { Component } from 'react';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import './App.css'
import Scroll from '../Components/Scroll'

class App extends Component {
		constructor() {
			super()
			this.state = {
				Robots: [],
				searchfield: ''
			}
		}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => {
			return response.json();
		})
		.then(users => {
		this.setState( { Robots: users } )
	});
	}


	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value });
	}

	render() {
		const { Robots,searchfield} = this.state
		const filteredRobots = Robots.filter(Robot => {
			return Robot.name.toLowerCase().includes(searchfield.toLowerCase())
		})
		console.log(filteredRobots)

		return !Robots.length 
			? <h1 className="tc f1">Loading...</h1>
			: 
		 (
  		<div className = "tc">
  			<h1 className="f2"> Robofriends </h1>
  			<SearchBox SearchChange={this.onSearchChange} />
  			<Scroll>
  			<CardList Robots={filteredRobots} />
  			</Scroll>
  		</div>
		);
}
}



export default App;

