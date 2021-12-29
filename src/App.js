import React, { Component } from 'react';
import './App.css';
import TodoItems from './components/TodoItems/TodoItems'
import AddItems from "./components/AddItems/AddItems";

class App extends Component {
	state = {
		items: [
			{ id: 1, name: "Html", length: 10 },
			{ id: 2, name: "CSS", length: 15 },
			{ id: 3, name: "JavaScript", length: 35 }
		]

	};
  deleteItems = (id) => {
    let items = this.state.items;
    let i = items.findIndex(item => item.id === id)
    items.splice(i, 1)
    this.setState({ items: items})
  }

  addItems = (item) => {
    item.id = Math.random() * 12 ;
     let items = this.state.items;
     items.push(item);
     this.setState({ items: items })
  }
	render() {
		return (
			<div className="App container">
				<h1 className="text-center">Todo App</h1>
				<TodoItems items={this.state.items} deleteItems={this.deleteItems} />
				<AddItems addItem={this.addItems} />
			</div>
		);
	}
}

export default App;
