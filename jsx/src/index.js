// Import react and reactDOM

import React from 'react';
import reactDOM from 'react-dom';

// Create a react component
const App = () => {
	const style = {backgroundColor: 'blue', color: 'white'};
    return (
		  <div>
				<label className="label" htmlFor="name">
				Enter name: 
				</label>
				<input id="name" type="text" />
				<button style={style}>Submit</button>
			</div>
		);
};

// Take the react component and show it on the screen
reactDOM.render(
  <App />,
	document.querySelector('#root')
);