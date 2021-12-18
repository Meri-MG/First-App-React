import React from 'react';
import faker from 'faker';

const CommentDetail = (props) => {
    console.log(props)
    return (
      <div className="comment">
        <a href="/" className="avatar">
					<img alt="avatar" src={ faker.image.image()}/>
				</a>
				<div className="content">
				  <a href="/" className="author">
					{props.author}
					</a>
					<div className="metadata">
					  <span className="date"> Today at 6:00PM</span>
					</div>
					<div className="text"> Nice post blog!</div>
				</div>
			</div>
    );
};

export default CommentDetail;