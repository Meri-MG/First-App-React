// Import react and reactDOM

import React from 'react';
import reactDOM from 'react-dom';
import faker from 'faker';

// Create a react component
const App = () => {
	return (
    <div className="ui container comments">
		  <div className="comment">
        <a href="/" className="avatar">
					<img alt="avatar" src={ faker.image.image()}/>
				</a>
				<div className="content">
				  <a href="/" className="author">
					Meri
					</a>
					<div className="metadata">
					  <span className="date"> Today at 6:00PM</span>
					</div>
					<div className="text"> Nice post blog!</div>
				</div>
			</div>
			<div className="comment">
        <a href="/" className="avatar">
					<img alt="avatar" src={ faker.image.image()}/>
				</a>
				<div className="content">
				  <a href="/" className="author">
					Meri
					</a>
					<div className="metadata">
					  <span className="date"> Today at 6:00PM</span>
					</div>
					<div className="text"> Nice post blog!</div>
				</div>
			</div>
			<div className="comment">
        <a href="/" className="avatar">
					<img alt="avatar" src={ faker.image.image()}/>
				</a>
				<div className="content">
				  <a href="/" className="author">
					Meri
					</a>
					<div className="metadata">
					  <span className="date"> Today at 6:00PM</span>
					</div>
					<div className="text"> Nice post blog!</div>
				</div>
			</div>
		</div>
				
	);
};

// Take the react component and show it on the screen
reactDOM.render(
  <App />,
	document.querySelector('#root')
);