import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

import ApprovalCard from './ApprovalCard';
import CommentDetail from './CommentDetail';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
      <CommentDetail 
      author="Sam" 
      timeAgo="Today at 4:45PM" 
      commentText= "I like potatoes!" 
      thumbIMG={faker.image.avatar()}/> 
      </ApprovalCard>       
      
      <CommentDetail 
      author="Alex" 
      timeAgo="Today at 2:00AM" 
      commentText="I like 'em a lot." 
      thumbIMG={faker.image.avatar()}/>       
      
      <CommentDetail 
      author="Jane" 
      timeAgo="Yesterday at 5:00PM" 
      commentText="I like 'em cold..." 
      thumbIMG={faker.image.avatar()}/>        

      
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
