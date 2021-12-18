// Import react and reactDOM

import React from 'react';
import reactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

// Create a react component
const App = () => {
	return (
    <div className="ui container comments">
		<CommentDetail author="Meri"/>
		<CommentDetail author="Steven"/>
		<CommentDetail author="Aku"/>
		</div>
				
	);
};

// Take the react component and show it on the screen
reactDOM.render(
  <App />,
	document.querySelector('#root')
);