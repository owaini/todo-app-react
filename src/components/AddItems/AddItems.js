import React, { Component } from 'react'
import './AddItems.css'
export class AddItems extends Component {
	state = {
		name: "",
		length: "",
	};

	handleChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value,
		});
	};

	handleSubmit = (e) => {
        e.preventDefault();
        if(this.state.name === "") {
           alert('You should enter Course ')
        } else {
            this.props.addItem(this.state);
						this.setState({
							name: "",
							length: "",
						});
        }
        
    }

	render() {
		return (
			<div className="header form">
				<form onSubmit={this.handleSubmit}>
					<input
						type="text"
						placeholder="Enter Course..."
						id="name"
						onChange={this.handleChange}
						value={this.state.name}
					/>
					<input
						type="number"
						placeholder="Enter Course Length..."
						id="length"
						onChange={this.handleChange}
						value={this.state.length}
					/>
					<input type="submit" value="Add" />
				</form>
			</div>
		);
	}
}

export default AddItems
