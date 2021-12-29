import React from 'react'
import "./TodoItems.css";

function TodoItems(props) {
    const { items, deleteItems } = props;
    let length = items.length;

    const ListItems = length ? (
        items.map(item => {
        return (
					<div className="header" key={item.id}>
						<span className="name">{item.name}</span>
						<span className="age">{item.length}</span>
						<span
							className="action icon"
							id="delete"
							onClick={() => deleteItems(item.id)}
						>
							&times;
						</span>
					</div>
				);
    })
    ) : (
        <p>There is no item to show</p>
    ) 
    return (
			<div className="ListItems">
				<div className="header">
					<span className="name title">Course</span>
					<span className="age title">Lectures </span>
					<span className="action title">Action </span>
				</div>
				{ListItems}
			</div>
		);
}

export default TodoItems
