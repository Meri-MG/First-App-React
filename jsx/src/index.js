// Import react and reactDOM

import React from 'react';
import reactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

// Create a react component
const App = () => {
	return (
    <div className="ui container comments">
		<ApprovalCard>
		  <CommentDetail author="Meri" timeAgo="Today at 5:00PM" commentText="Nice blog post!" avatarPic={ faker.image.image() }/>
		</ApprovalCard>
		<ApprovalCard>
		  <CommentDetail author="Steven" timeAgo="Today at 9:00AM" commentText="Nice blog post!" avatarPic={ faker.image.image() }/>
		</ApprovalCard>
		<ApprovalCard>
		  <CommentDetail author="Aku" timeAgo="yesterday at 2:00PM" commentText="Nice blog post!" avatarPic={ faker.image.image() }/>
		</ApprovalCard>
		</div>
				
	);
};

// Take the react component and show it on the screen
reactDOM.render(
  <App />,
	document.querySelector('#root')
);