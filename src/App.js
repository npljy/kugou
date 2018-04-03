import React, { Component } from 'react';
import axios from 'axios'
import './App.css';
import NewSong from './comp/newSong';


class App extends Component {
	constructor(){
		super();
		this.state = {
			banner:[],
			data:[]
		};
	}

	componentDidMount(){
		axios.get('/proxy/?json=true').then((json)=>{
			// console.log("App.js",json);
			let {data:{banner,data}} = json;
			this.setState({
				banner,
				data
			})
		})
	}
	render() {
		let {banner,data} = this.state;
		// console.log("App.js",this.props)
		return (
			<div className="App">
				<NewSong {...{
					banner,
					data,
				}}/>
			</div>
		);
	}
}

export default App;
